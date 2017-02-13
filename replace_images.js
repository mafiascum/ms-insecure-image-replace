const crypto = require('crypto');
const Promise = require('bluebird');

const config = require('./config');

module.exports = (db, lines, verbose) => {
    Promise.each(lines, (line, i, length) => {
        const [id, type, contents, _, newFileName] = line.split('\t');

        if (verbose) {
            console.log(`Starting line ${i+1} for id ${id} (${type})`);
        }

        let promise;

        switch (type) {
        case 'PM':
            promise = db.models.phpbb_privmsgs.findById(id, {
                attributes: ['msg_id', 'message_text']
            })
                .then(pm => {
                    const newText = pm.message_text.replace(contents, `${config.newImagePath}${newFileName.replace('.','&#46;')}`);

                    if (newText === pm.message_text) {
                        console.warn(`Warning (line ${i+1}): did not find any instance of ${contents} for id ${id} (${type})`);
                    }

                    return pm.update({
                        message_text: newText
                    });
                });
            break;
        case 'POST':
            promise = db.models.phpbb_posts.findById(id, {
                attributes: ['post_id', 'post_text']
            })
                .then(post => {
                    const newText = post.post_text.replace(contents, `${config.newImagePath}${newFileName.replace('.','&#46;')}`);
                    const newChecksum = crypto.createHash('md5').update(newText).digest('hex');

                    if (newText === post.post_text) {
                        console.warn(`Warning (line ${i+1}): did not find any instance of ${contents} for id ${id} (${type})`);
                    }

                    return post.update({
                        post_text: newText,
                        post_checksum: newChecksum
                    });
                });
            break;
        default:
            console.error(`Error (line ${i+1}): Unknown type encountered: ${type}`);
            return Promise.resolve();
        }

        return promise.then(() => {
            if (verbose) {
                console.log(`Finishing line ${i+1} for id ${id} (${type})`);
            } else {
                process.stdout.write(`Processed: ${i+1} of ${length} \r`);
                if (i === length - 1) {
                    process.stdout.write(`\n`);
                }
            }
            return;
        })
            .catch(e => {
                console.error(`Error (line ${i+1}): Database: ${e} (id: ${id})`);
                return;
            })
    });
};