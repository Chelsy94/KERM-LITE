const { Sequelize } = require("sequelize");
require("dotenv").config();

const toBool = x => x === "true";
const DATABASE_URL = process.env.DATABASE_URL || "./database.db";

module.exports = {
   // Boolean Values (converted from Strings)
   LOGS: toBool(process.env.LOGS) || false,
   ANTILINK: toBool(process.env.ANTI_LINK) || true,
   HEROKU: toBool(process.env.HEROKU) || false,
   AUTO_READ: toBool(process.env.AUTO_READ) || false,
   AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || true,
   DELETED_LOG: toBool(process.env.DELETED_LOG) || true,
   STATUS_SAVER: toBool(process.env.STATUS_SAVER) || false,
   AUTO_REACT: toBool(process.env.AUTO_REACT) || true,

   // String Values
   SESSION_ID: process.env.SESSION_ID || "KermLite~DWYb4F3r", // Put your session
   HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null" ? "^" : "[!]",
   BOT_INFO: process.env.BOT_INFO || "CONSTIPATION⚡️", // YourName;BotName;Image/VideoLink
   SUDO: process.env.SUDO || "237694028912",
   PRESENCE: process.env.PRESENCE || "recording", // "unavailable", "available", "composing", "recording", "paused"
   CAPTION: process.env.CAPTION || "DALTON13",
   TIME_ZONE: process.env.TIME_ZONE || "Africa/Lagos",
   ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
   BRANCH: "master",
   AUTHOR: process.env.AUTHOR || "LAURIAN🌟",
   ANTIWORD: process.env.ANTIWORD || "badword1,badword2,badword3",
   PACKNAME: process.env.PACKNAME || "CONSPI⚡️",
   WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
   GOODBYE_MSG: process.env.GOODBYE_MSG || "À plus @user bye to igname",
   RMBG_KEY: process.env.RMBG_KEY || "",
   WORK_TYPE: process.env.WORK_TYPE || "public",
   DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
   REMOVEBG: process.env.REMOVEBG || "",
   HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   HEROKU_API_KEY: process.env.HEROKU_API_KEY,

   // Number Values
   WARN_COUNT: 3,

   // Database Configuration
   DATABASE_URL: DATABASE_URL,
   DATABASE:
      DATABASE_URL === "./database.db"
         ? new Sequelize({
              dialect: "sqlite",
              storage: DATABASE_URL,
              logging: false,
           })
         : new Sequelize(DATABASE_URL, {
              dialect: "postgres",
              ssl: true,
              protocol: "postgres",
              dialectOptions: {
                 native: true,
                 ssl: { require: true, rejectUnauthorized: false },
              },
              logging: false,
           }),
};
