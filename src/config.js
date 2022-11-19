import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "", //prefix'ini gir
  TOKEN: "", //Bağlayacağın botun tokenini gir.
  ACTIVITY: { NAME: "Ticket İcin", TYPE: "Bekliyor" },
  GUILD_ID: "", //Sunucu İd'si gir
  TICKET: {
    CHANNEL: "",// Ticket Odası İd'si gir
    CATEGORY: "",// Kategory id'si gir
    ARCHIVE_CATEGORY: "1043558305999630416",
    MESSAGE: "Bilet oluşturmak için tıklayın!",
    STAFF_ROLES: [],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Bileti Onayla",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Bileti Arşivle",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Bileti Sil",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "İsminiz",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "İsminizi yazabilir misiniz?",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "Yaşınız",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Yaşınızı yazabilir misiniz?",
        REQUIRED: true,
      },
    ],
  },
};
