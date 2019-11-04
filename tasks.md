####################
Créer une base de données

Afin de gérer les projets et leurs différents intervenants, il est nécessaire de créer huit tables : Projet, Utilisateur, Rôle, Issues, Taches, Tests, Releases et Documentation.

Les champs de la table Utilisateur sont :
- Nom : le nom de l'utilisateur, de type VARCHAR
- Pénom : le prénom de l'utilisateur, de type VARCHAR
- Adresse Mail : l'addresse mail de l'utilisateur, de type VARCHAR
- Nom de la société : le nom de la société dans laquelle l'utilisateur travaille, de type VARCHAR. Ce champs peut-être de valeur NULL.
- Login : le Login de l'utilisateur, de type VARCHAR. Cette clé est UNIQUE.
- Mot de passe: le Mot de pas de l'utilisateur, de type VARCHAR

Les champs de la table Projet sont :
- Titre : le titre du projet, de type VARCHAR
- Description : la description exhaustive du projet, de type VARCHAR
- Propriétaire : le Login du propriétaire du projet, de type VARCHAR
Le champs "Propriétaire" est clé primaire de la table Utilisateur et fait réference au champs "Login" de la table Utilisateur.

Les champs de la table Rôle sont :
- ID Projet : le Titre du projet concerné, de type VARCHAR
- ID Compte : le Login de l'utilisateur concerné, de type VARCHAR
- Rôle : le rôle attribué à l'utilisateur sur ce projet, de type VARCHAR
Les champs "ID Projet" et "ID Compte" sont respectivement clés primaires des tables Projet et Utilisateur et font références aux champs "Titre" de la table Projet et "Login" de la table Utilisateur.

Les champs de la table Issues sont :
- ID Projet : le Titre du projet concerné, de type VARCHAR
- Role : la partie "En tant que" de la description de l'issue, de type VARCHAR
- Action : la partie "Je souhaite" de la description de l'issue, de type VARCHAR
- Raison : la partie "Afin que" de la description de l'issue, de type VARCHAR
Le champs "ID Projet" est la clé primaire de la table Projet et fait référence au champ "Titre" de la table Projet.

Les champs de la table Taches sont :
- ID Projet : le Titre du projet concerné, de type VARCHAR
- Titre : le titre de la tache, de type VARCHAR
- Description : la description exhaustive de la tache, de type VARCHAR
- Statut : le statut de la tache, de type ENUM(TO DO, PENDING, DONE)
Le champs "ID Projet" est la clé primaire de la table Projet et fait référence au champ "Titre" de la table Projet.

Les champs de la table Documentation sont :
- ID Projet : le Titre du projet concerné, de type VARCHAR
- Description : la description exhaustive de l'issue, de type VARCHAR
Le champs "ID Projet" est la clé primaire de la table Projet et fait référence au champ "Titre" de la table Projet.

Les champs de la table Tests :
- ID Projet : le Titre du projet concerné, de type VARCHAR
- Given : la partie GIVEN du test, de type VARCHAR
- When : la partie WHEN du test, de type VARCHAR
- Then : la partie THEN du test, de type VARCHAR
Le champs "ID Projet" est la clé primaire de la table Projet et fait référence au champ "Titre" de la table Projet.

Les champs de la table Releases sont :
- ID Projet : le Titre du projet concerné, de type VARCHAR
- Nom : le nom de la release, de type VARCHAR
- Date : la date de la release, de type DATETIME
- URL : un lien permettant de télécharger l'exécutable/l'archive de la release, de type VARCHAR
Le champs "ID Projet" est la clé primaire de la table Projet et fait référence au champ "Titre" de la table Projet.

####################
Ajouter une barre de recherche sur la page d'accueil

Sur la page d'accueil de l'outil, une barre de recherche serait disponible. En tapant certains mots clés dans celle-ci et en validant la recherche, l'outil proposerait à l'utilisateur (toujours dans la page d'accueil) une liste des 10 projets triés par pertinence selon le titre et la description des projets. Chaque projet listé est représenté par son titre. En appuyant dessus, l'utilisateur est reconduit vers la page d'accueil du projet selectionné. Si l'outil ne trouve aucun résultat correspondant dans sa base de donnée, il afficherait le message suivant : "Aucun résultat correspondant à votre recherche".

Cette fonctionnalité est disponible pour tous les utilisateurs.

####################
Visualiser la page d'accueil d'un projet

En sélectionnant un projet parmi ceux proposés par la page d'accueil de l'outil, l'utilisateur serait reconduit vers une nouvelle page contenant le titre et la description du projet selectionné. Sur la gauche, il y aurait les boutons ISSUES, TASKS, TESTS, RELEASES et DOCUMENTATION. En cliquant sur le bouton "OK" en bas de la page, l'utilisateur est redirigé vers la page d'accueil.

Cette fonctionnalité est disponible pour tous les utilisateurs.

####################
Ajouter le bouton S'INSCRIRE

Si l'utilisateur n'est pas déjà connecté à un compte reconnu par l'outil, celui ci proposerait un bouton S'INSCRIRE à partir de n'importe quelle page où l'utilisateur se trouve. En appuyant dessus, l'outil ouvrirait une nouvelle fenêtre qui proposerait un formulaire à remplir avec les informations nécessaires à l'authentification (NOM, PRÉNOM, LOGIN, ADRESSE MAIL et MOT DE PASSE). Tous ces champs doivent être obligatoirement remplis. Il y aurait un champs facultatif qui serait EMPLOYE CHEZ pour référencer le nom de l'entreprise où l'utilisateur est employé. En appuyant sur le bouton VALIDER tout en bas de la page, l'utilisateur est reconduit sur la page d'accueil de l'outil sans être connecté au compte qu'il vient de créer si le LOGIN qu'il a choisi n'est pas déjà utilisé par un autre compte. Si le LOGIN choisi par l'utilisateur est déjà utilisé par un autre compte, l'utilisateur reste sur la page d'inscription et un message apparait lui demandant de choisir un autre LOGIN.

Cette fonctionnalité est disponible pour les utilisateur ayant le statut VISITEUR sur l'outil.

####################
Ajouter le bouton S'AUTHENTIFIER

Si l'utilisateur n'est pas déjà connecté à un compte reconnu par l'outil, celui ci proposerait un bouton S'AUTHENTIFIER à proximité du bouton S'INSCRIRE à partir de n'importe quelle page où l'utilisateur se trouve. Ce bouton mènerait à une nouvelle page. Celle ci comporterait les champs suivants à remplir: LOGIN et MOT DE PASSE. Lorsque ceux ci sont remplis, l'utilisateur appuie sur le bouton VALIDER et il est reconduit vers la page d'accueil si les champs sont corrects. Les boutons S'INSCRIRE et S'AUTHENTIFIER ne sont alors plus présents sur la page d'accueil et à la place on trouverait le bouton MON COMPTE. Si l'utilisateur a mal rempli le formulaire d'authentification, celui ci reste sur la page d'authentification et un message apparait lui demandant de ressaisir ses identifiants.

Cette fonctionnalité est disponible pour les utilisateur ayant le statut VISITEUR sur l'outil.

####################
Informer l'utilisateur des fonctionnalités auquel il a accès dans un projet

Lorsque l'utilisateur cherche à accéder aux ISSUES, TASKS, TESTS, RELEASES ou DOCUMENTATION d'un projet auquel il n'est pas membre, une fenêtre pop-up s'affiche. Cette fenêtre pop-up afficherait un message informant l'utilisateur ainsi : "Vous n'êtes pas membre de ce projet. Vous ne pouvez donc pas accéder à cette fonctionnalité.". En cliquant sur le bouton "OK" de cette fenêtre pop-up, celle ci se ferme.

Cette fonctionnalité est disponible pour tous les utilisateurs.

####################
Ajouter le bouton MON COMPTE

Si l'utilisateur est déjà connecté à un compte, celui ci aurait accès au bouton MON COMPTE à partir de n'importe qu'elle page où celui ci se trouve. En cliquant dessus un menu déroulant s'afficherait où on trouverait 3 nouveaux boutons: MON PROFIL, MES PROJETS et DECONNEXION.

Cette fonctionnalité est disponible pour les utilisateur ayant un statut autre que VISITEUR sur l'outil.

####################
Ajouter le bouton ACCUEIL

Sur n'importe quel page de l'outil, il y aurait en haut à gauche un bouton ACCUEIL. En le cliquant, ce bouton redirigerait l'utilisateur vers la page d'accueil quelque soit la page où il se trouve.

Cette fonctionnalité est disponible pour tous les utilisateurs.

####################
Ajouter le bouton MES PROJETS

Si l'utilisateur est déjà connecté à un compte, sur n'importe quel page de l'outil, il y aurait le menu déroulant MON COMPTE comportant l'option MES PROJETS. Cette option redirigerait l'utilisateur vers une page listant tous les projets dont il est propriétaire ou membre. Chaque projet présent dans la liste est représenté par son titre. Lorsque l'utilisateur appuie sur un des projets, celui ci est reconduit vers la page d'accueil de son projet.

Cette fonctionnalité est disponible pour les utilisateur ayant un statut autre que VISITEUR sur l'outil.

####################
Ajouter le bouton CREER UN PROJET

Après que l'utilisateur U se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à un bouton CREER UN PROJET. Celui ci redirigerait l'utilisateur U vers une nouvelle page contenant un formulaire de création d'un projet, avec les champs "Titre" et "Description". La page comporte un bouton VALIDER qui, lorsqu'il est sollicité, créé le projet dans la base de donnée en mettant l'utilisateur U comme propriétaire de ce projet. L'utilisateur U est alors redirigé vers la page de ses projets où il peut constater l'arrivée d'un nouveau projet parmi les siens.

Cette fonctionnalité est disponible pour les utilisateur ayant un statut autre que VISITEUR sur l'outil.

####################
Ajouter le bouton MON PROFIL

Si l'utilisateur est déjà connecté à un compte, sur n'importe quel page de l'outil, il y aurait le menu déroulant MON COMPTE comportant l'option MON PROFIL. Cette option redirigerait l'utilisateur vers une page affichant des champs de texte éditables contenant les informations du compte de l'utilisateur (NOM, PRENOM, ADRESSE MAIL, EMPLOYE CHEZ, LOGIN et MOT DE PASSE). En bas de la page, des boutons SAUVEGARDER et RETOUR sont affichés. L'appui sur le bouton SAUVEGARDER met à jour les modifications réalisées dans la page de données. L'appui sur le bouton RETOUR ne prend en compte aucune modification. Quelque soit le bouton selectionné parmis les deux derniers proposés, l'utilisateur est redirigé vers la page de ses projets. Si l'utilisateur souhaite modifier son LOGIN mais que le nouveau est déjà utilisé par un autre utilisateur, un message apparait avertissant l'utilisateur que le nouveau LOGIN est déjà utilisé et qu'en conséquence son LOGIN n'a pas été modifié. Dans ce là, l'utilisateur n'est pas redirigé vers la page de ses projets et reste sur la page de modifications de ses données personnelles.

Cette fonctionnalité est disponible pour les utilisateur ayant un statut autre que VISITEUR sur l'outil.

####################
Ajouter le bouton DECONNEXION

Si l'utilisateur est déjà connecté à un compte, sur n'importe quel page de l'outil, il y aurait le menu déroulant MON COMPTE comportant l'option DECONNEXION. Cette option redirigerait l'utilisateur vers la page d'accueil s'il est sur une autre page. Cependant la page d'accueil ne contiendrait plus le bouton MON COMPTE. A la place de celui il y aurait les boutons S'INSCRIRE ET S'AUTHENTIFIER.

Cette fonctionnalité est disponible pour les utilisateur ayant un statut autre que VISITEUR sur l'outil.

####################
Ajouter le bouton SUPPRIMER pour chaque projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. Dans cette liste, les projets dont l'utilisateur est propriétaire auraient à proximité un bouton SUPPRIMER permettant leur suppression. En appuyant dessus, une pop-up de confirmation avec deux boutons (CONFIRMER et ANNULER), s'ouvre. Si l'utilisateur clique sur le bouton CONFIRMER le projet est supprimé de l'outil et la fenetre pop-up se ferme. Si l'utilisateur choisit le bouton ANNULER, le projet est conservé sur l'outil et la fenêtre pop-up se ferme.

Cette fonctionnalité est disponible pour l'utilisateur étant propriétaire du projet.

####################
Ajouter le bouton EDITER pour chaque projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. Dans cette liste, les projets dont l'utilisateur est propriétaire auraient à proximité un bouton "Editer" permettant leur modification. En appuyant dessus, l'utilisateur est redirigé vers une page contenant les informations du projet. Depuis cette page, des champs éditables contenant le titre et la description du projet sélectionné sont affichés. En bas de cette page, des boutons SAUVEGARDER et ANNULER sont affichés. Si l'utilisateur appuie sur le bouton SAUVEGARDER met à jour les modifications réalisées, sinon l'outil ne prend en compte aucune modification. Quelque soit le bouton selectionné parmi les deux derniers proposés l'utilisateur est ensuite redirigé vers la page de ses projets. 


Cette fonctionnalité est disponible pour l'utilisateur étant propriétaire du projet.

####################
Ajouter le bouton GERER pour chaque projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. Dans cette liste, les projets dont l'utilisateur est propriétaire auraient à proximité un bouton GERER. En appuyant dessus, l'utilisateur est redirigé vers la page de gestion des membres du projet. Cette page contient deux groupes : "Clients" et "Développeurs". Pour chaque groupe, le propriétaire du projet peut constater la présence d'une liste qui seraient la liste des developpeurs et des clients du projet. Chaque client et developpeur est représenté, dans ces listes, par son login, son nom et son prénom. Chaque groupe est associé à une barre de recherche : les utilisateurs sont recherchés par leur login ou par leur nom et leur prénom en fonction de mot-clés saisis par le propriétaire du projet, et le résultat de la recherche est affiché sous la forme d'une autre liste. A partir de cette liste, le propriétaire du projet peut alors choisir quel(s) utilisateur(s) ajouter au groupe associé sur ce projet. En bas de la page, des boutons SAUVEGARDER et RETOUR sont affichés. Si l'utilisateur appuie sur le bouton SAUVEGARDER, l'outil met à jour les modifications réalisées. Sinon l'outil ne prend en compte aucune modification. Quelque soit le bouton selectionné par l'utilisateur l'utilisateur est redirigé vers la page de ses projets. 

Cette fonctionnalité est disponible pour l'utilisateur étant propriétaire du projet.

####################
Ajouter le bouton SUPPRIMER UN MEMBRE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. Dans cette liste, les projets dont l'utilisateur est propriétaire auraient à proximité un bouton GERER. En appuyant dessus, l'utilisateur est redirigé vers la page de gestion des membres du projet. Cette page contient deux groupes : "Clients" et "Développeurs". Pour chaque groupe, le propriétaire du projet peut constater la présence d'une liste qui seraient la liste des developpeurs et des clients du projet. Chaque client et developpeur est représenté, dans ces listes, par son login, son nom et son prénom. Pour chaque membre de chaque liste, il y aurait à proximité un bouton SUPPRIMER. En le selectionnant, une fenêtre pop-up apparait contenant deux boutons, CONFIRMER et ANNULER. La fenêtre pop-up contient le message suivant: "Êtes vous certains de vouloir supprimer LOGIN_DU_MEMBRE du projet TITRE_DU_PROJET ?". En selectionnant le bouton CONFIRMER, le propriétaire destitue le membre de ses responsabilités sur le projet. Ce membre n'est plus qu'un visiteur sur le projet. Il n'est donc plus présent dans la liste des membre du projet. En selectionnant le bouton ANNULER, le membre est conservé parmi les membres du projet. Quelque soit le bouton selectionné par le propriétaire du projet, la fenêtre pop-up se ferme.

Cette fonctionnalité est disponible pour l'utilisateur étant propriétaire du projet.

####################
Ajouter un menu sur la page d'accueil de chaque projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers une nouvelle page contenant le titre et la description du projet selectionné. Sur la gauche, il y aurait les boutons ISSUES, TASKS, TESTS, RELEASES et DOCUMENTATION.

Cette fonctionnalité est disponible pour tous les membres du projet.

####################
Ajouter le bouton AJOUTER UNE ISSUE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur ISSUES, la liste des issues du projet et un bouton AJOUTER en haut s'affichent. En cliquant sur le bouton, une fenêtre pop-up s'ouvre qui affiche les champs suivant à remplir : EN TANT QUE, JE SOUHAITE et AFIN DE. Tant que tous ces champs ne sont pas remplis, le bouton VALIDER de cette fenêtre serait grisé. Une fois la validation possible, l'issue est ajoutée à la liste des issues et la fenêtre pop-up se ferme.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton MODIFIER UNE ISSUE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur ISSUES, la liste des issues du projet s'affiche. Pour chaque issue, l'utilisateur trouverait à proximité un bouton MODIFIER. En cliquant sur ce bouton, une fenêtre pop-up s'afficherait contenant les champs EN TANT QUE, JE SOUHAITE et AFIN DE. Chacun de ses champs seraient remplis par ceux de l'issue. Ces champs seraient éditables. En cliquant sur le bouton VALIDER en bas de la page, les modifications seraient sauvegardées et la fenêtre pop-up se fermerait.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton SUPPRIMER UNE ISSUE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur ISSUES, la liste des issues du projet s'affiche. Pour chaque issue, l'utilisateur trouverait à proximité un bouton SUPPRIMER. En cliquant sur celui-ci, une fenêtre pop-up s'afficherait contenant les boutons VALIDER et ANNULER et un message demandant à l'utilisateur de confirmer son choix. En cliquant sur le bouton VALIDER, l'issue correspondante serait supprimée du projet. Sinon l'issue est conservée. Quelque soit le bouton selectionné, la fenêtre pop-up se fermerait.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton AJOUTER UNE TACHE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur TÂCHES, les 3 listes de tâches du projet (TO DO, PENDING et DONE) et un bouton AJOUTER en haut s'affichent. En cliquant sur le bouton, l'outil ouvre une fenêtre pop-up avec un champ TÂCHE et un champ LISTE parmi où il faudrait cocher une unique option parmi les 3 proposées (TODO, PENDING et DONE). Tant que ces champ ne sont pas remplis, le bouton VALIDER de cette fenêtre sera grisé. Une fois la validation possible, la tâche sera ajoutée à la liste de tâche correspondante et la fenêtre pop-up se ferme.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton MODIFIER UNE TACHE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur TACHES, les 3 listes de tâches du projet (TO DO, PENDING et DONE). Pour chaque tâche, l'utilisateur trouverait à proximité un bouton MODIFIER. En cliquant sur ce bouton, une fenêtre pop-up s'afficherait contenant un champ TÂCHE et un champ LISTE parmi où il faudrait cocher une unique option parmi les 3 proposées (TODO, PENDING et DONE). Chacun de ses champs seraient remplis par ceux de la tâche. Le champ TACHE serait éditable. En cliquant sur le bouton VALIDER en bas de la page, les modifications seraient sauvegardées et la fenêtre pop-up se fermerait.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton SUPPRIMER UNE TACHE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur TACHES, les 3 listes de tâches du projet (TO DO, PENDING et DONE) s'affiche. Pour chaque tache, l'utilisateur trouverait à proximité un bouton SUPPRIMER. En cliquant sur celui-ci, une fenêtre pop-up s'afficherait contenant les boutons VALIDER et ANNULER et un message demandant à l'utilisateur de confirmer son choix. En cliquant sur le bouton VALIDER, la tache correspondante serait supprimée du projet. Sinon la tache est conservée. Quelque soit le bouton selectionné, la fenêtre pop-up se fermerait.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton AJOUTER UN TEST

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur TESTS, la liste des tests du projet et un bouton AJOUTER en haut s'affichent. En cliquant sur le bouton, une fenêtre pop-up s'ouvre et affiche les champs suivants : GIVEN, WHEN et THEN. Il y a des petits boutons + après les champs GIVEN et THEN pour ajouter des champs AND. Pour chaque champs AND, il y aurait des petits boutons - pour supprimer le champs AND correspondant. Tant que tous les champs ne sont pas remplis, le bouton VALIDER sera grisé. Une fois la validation possible, le test sera ajouté à la liste de tests et la fenêtre pop-up se ferme.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton MODIFIER UN TEST

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur TESTS, la liste des tests du projet s'affiche. Pour chaque test, l'utilisateur trouverait à proximité un bouton MODIFIER. En cliquant sur le bouton, une fenêtre pop-up s'ouvre et affiche les champs suivants : GIVEN, WHEN et THEN. Il y a des petits boutons + après les champs GIVEN et THEN pour ajouter des champs AND. Pour chaque champs AND, il y aurait des petits boutons - pour supprimer le champs AND correspondant. Tant que tous les champs ne sont pas remplis, le bouton VALIDER sera grisé. Chacun de ses champs seraient remplis par ceux du tests. Ces champs seraient éditables. En cliquant sur le bouton VALIDER en bas de la page, les modifications seraient sauvegardées et la fenêtre pop-up se fermerait.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton SUPPRIMER UN TEST

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur TESTS, la liste des tests du projet s'affiche. Pour chaque test, l'utilisateur trouverait à proximité un bouton SUPPRIMER. En cliquant sur celui-ci, une fenêtre pop-up s'afficherait contenant les boutons VALIDER et ANNULER et un message demandant à l'utilisateur de confirmer son choix. En cliquant sur le bouton VALIDER, le test correspondant serait supprimé du projet. Sinon le test est conservé. Quelque soit le bouton selectionné, la fenêtre pop-up se fermerait.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton METTRE A JOUR LA RELEASE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur RELEASE, une liste de release et le bouton METTRE A JOUR en haut s'affichent.  En appuyant sur le bouton, une fenêtre pop-up s'ouvre et propose à l'utilisateur de selectionner un fichier exécutable ou un lien sur son poste de travail. En en selectionnant un, la fenêtre pop-up se ferme et il est maintenant possible de télécharger cet exécutable ou ce lien via le bouton TELECHARGER du nouvel élément présent dans la liste de release de la rubrique RELEASE.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Ajouter le bouton TELECHARGER LA RELEASE

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur RELEASE, une liste de release s'affiche. Pour chaque release il y aurait à proximité un bouton TELECHARGER. En cliquant dessus, une fenetre pop-up apparait et demande à l'utilisateur de confirmer le téléchargement ou de l'annuler via deux boutons. En confirmant, le téléchargement s'effectue et la fenêtre pop-up se ferme. En annulant, aucun téléchargement s'effectue et la fenêtre pop-up se ferme.

Cette fonctionnalité est disponible pour tous les membres du projet.

####################
Ajouter le bouton EDITER LA DOCUMENTATION

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets, l'utilisateur serait reconduit vers la page d'accueil du projet. Lorsque l'utilisateur clique sur DOCUMENTATION, un champ de texte éditable apparaît au centre qui correspont à la documentation déjà existante du projet. Lorsque l'utilisateur clique sur le bouton VALIDER en bas de la page, les modifications apportées sur ce texte sont sauvegardées et l'utilisateur est reconduit sur la page d'accueil du projet correspondant.

Cette fonctionnalité est disponible pour le propriétaire du projet et les developpeurs du projet.

####################
Visualiser la page ISSUE du projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets où celui ci est client, l'utilisateur est reconduit vers la page d'accueil du projet. En sélectionnant l'option ISSUE du menu du projet, le client est reconduit vers la page des issues du projet. Cette page contient la liste des issues du projet, chacune décrite par ses champs que l'utilisateur peut uniquement visualiser.

Cette fonctionnalité est uniquement disponible aux clients du projet

####################
Visualiser la page TACHES du projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets où celui ci est client, l'utilisateur est reconduit vers la page d'accueil du projet. En sélectionnant l'option TACHES du menu du projet, le client est reconduit vers la page des taches du projet. Cette page contient les 3 listes de tâches du projet (TO DO, PENDING et DONE). Chaque tache est décrite pas son unique champ que l'utilisateur peut visualiser.

Cette fonctionnalité est uniquement disponible aux clients du projet.

####################
Visualiser la page TESTS du projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets où celui ci est client, l'utilisateur est reconduit vers la page d'accueil du projet. En sélectionnant l'option TESTS du menu du projet, le client est reconduit vers la page des tests du projet. Cette page contient la liste des tests, chacun décrit par ses champs que l'utilisateur peut uniquement visualiser.

Cette fonctionnalité est uniquement disponible aux clients du projet

####################
Visualiser la page DOCUMENTATION du projet

Après que l'utilisateur se soit authentifié et qu'il ait selectionné successivement les boutons MON COMPTE et MES PROJETS, il aurait accès à la liste des projets auxquels il est membre ou propriétaire. En selectionnant un projet parmi ceux proposés dans la liste des projets où celui ci est client, l'utilisateur est reconduis vers la page d'accueil du projet. En sélectionnant l'option DOCUMENTATION du menu du projet, le client est reconduit vers la page de documentation du projet. Cette page contient un champs de texte contenant toutes les informations necessaires et relatives au projet.

Cette fonctionnalité est uniquement disponible aux clients du projet.