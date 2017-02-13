/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_privmsgs', {
    msg_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    root_level: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    author_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    icon_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    author_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    message_time: {
      type: DataTypes.INTEGER(11),
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
    message_subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    message_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message_edit_reason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    message_edit_user: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    message_attachment: {
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
    message_edit_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    message_edit_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    to_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bcc_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message_reported: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_privmsgs'
  });
};
