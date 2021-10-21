# Le Backend du site Bouns'Bot

Le backend est une API permettant de recuperer les levels sois du bot [Discord](https://github.com/FabienBounoir/Discord-Bot) sois du Bot [Twitch](https://github.com/FabienBounoir/Twitch-Bot).

## route

--> /discord                //Get la totalité des user

--> /discord/:ID            //Get la totalité des user d'un serveur specifique


--> /twitch                 //Get la totalité des users  

--> /twitch/:Channel        //Get la totalité des users d'une chaine


--> /playlist               //Get les playlists Disponible

--> /playlist/:nom          //Get les informations d'une playlist

--> /playlist/search/:nom   //Recherché des playlist


--> /guild/:id              //Get la config du serveur Discord

--> /guild/:id              //Mettre à jour la config du serveur Discord
## parametre

?page=  //Get les données par page de 100 utilisateurs

## Technologie

Le site est realisé principalement en [express](https://expressjs.com/fr/)
La recuperation des données est realisé grace à [mongoose](https://mongoosejs.com/)

## Information

Mon api est découpé en trois parties (les routes, les models, les middleware, et les controllers)

Pour voir en action le Bouns'Bot cela se passe [ici](https://discord.gg/KxedRVTutX)
