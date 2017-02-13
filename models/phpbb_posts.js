/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_posts', {
    post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    poster_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    icon_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    poster_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    post_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    post_approved: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    post_reported: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    enable_bbcode: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    enable_smilies: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    enable_magic_url: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    enable_sig: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    post_username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    post_subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    post_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_checksum: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    post_attachment: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    bbcode_bitfield: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    bbcode_uid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    post_postcount: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    post_edit_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    post_edit_reason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    post_edit_user: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    post_edit_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    post_edit_locked: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_posts'
  });
};
