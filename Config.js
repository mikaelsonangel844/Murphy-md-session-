export default {
    bot: {
        name: "Murphy-MD", // Nom du bot
        ownerName: "ᴍᴜʀᴘʜʏ᭄ғғ⚠️", // Ton pseudo ou nom
        ownerNumber: ["+242057954499"], // Numéro(s) du propriétaire (format international)
        prefix: ["!", "."], // Préfixes utilisables pour les commandes
        sessionName: "murphy-md-session", // Nom du fichier de session
        autoRead: true, // Lire automatiquement les messages entrants
        autoTyping: true, // Activer l'animation "en train d’écrire"
        autoRecord: false, // Activer l'animation "en train d'enregistrer un audio"
    },

    github: {
        user: "mikaelsonangel844", // Nom d’utilisateur GitHub
        repo: "murphy-md-session", // Nom du dépôt où stocker le session_id
        sessionFile: "session.json", // Fichier contenant le session_id
        branch: "main", // Branche utilisée pour stocker la session
    },

    messages: {
        success: "✅ Commande exécutée avec succès !",
        error: "❌ Une erreur s'est produite !",
        adminOnly: "⚠️ Cette commande est réservée aux admins !",
        ownerOnly: "⚠️ Cette commande est réservée au propriétaire du bot !",
    },

    api: {
        githubToken: "", // (Optionnel) Token GitHub pour un dépôt privé
        openaiKey: "sk-XXXXXXXXXXXXXXXX", // Clé API pour l'IA (ex: ChatGPT)
        removeBgKey: "XXXXXXXXXX", // Clé API pour supprimer l’arrière-plan des images
    },

    moderation: {
        antiLink: true, // Activer l'anti-lien (bannit les utilisateurs envoyant des liens)
        antiSpam: true, // Bloquer le spam
        warnLimit: 3, // Nombre d’avertissements avant bannissement
    },

    features: {
        downloadVideos: true, // Télécharger des vidéos
        aiChat: true, // Activer l’intelligence artificielle
        welcomeMessage: true, // Envoyer un message de bienvenue aux nouveaux membres
    },

    database: {
        type: "sqlite", // Type de base de données (sqlite, mongodb, mysql)
        path: "./database/murphy-md.db", // Chemin vers la base de données locale
        mongoUrl: "", // URL de connexion MongoDB (si utilisé)
    },
          }
