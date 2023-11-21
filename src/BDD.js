const info = [
  {
    name: "Subway",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==",
    note: "4.5",
    drive_time: "20 - 30mn",
    description:
      "Plongez dans l'univers délicieux et varié des sandwiches personnalisables à souhait. Chez Subway, l'expérience gustative est une aventure où vous êtes le chef. Explorez notre large gamme de pains frais et croustillants, choisissez parmi une multitude d'options de viandes, de légumes frais et de délicieuses sauces pour créer votre sandwich parfait. Que vous optiez pour les classiques intemporels ou que vous souhaitiez innover en créant une combinaison unique, notre menu diversifié saura répondre à toutes vos envies. Commandez facilement en ligne et profitez de la livraison directement à votre porte pour savourer votre repas Subway où que vous soyez. Avec Subway, chaque bouchée est une célébration de saveurs personnalisées et de fraîcheur inégalée. Découvrez l'art de composer votre sandwich idéal dès aujourd'hui !",
    delivery_price: "5.75€", // Prix de livraison pour Subway
  },
  {
    name: "McDonald's",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODQ1NDA4Zi1lOGFmLTRkMDUtYWI4YS0yNWMwYzVjMGI4YWUuanBlZw==",
    note: "3.9",
    drive_time: "15 - 25mn",
    description:
      "Plongez dans un univers où la joie de savourer des classiques incontournables se mêle à l'excitation de découvrir de nouvelles saveurs. Chez McDonald's, nous vous offrons bien plus que des hamburgers emblématiques et des frites croustillantes. Explorez notre menu diversifié comprenant des burgers juteux, des nuggets croustillants, des salades fraîches et bien d'autres délices. Chaque bouchée est une célébration de goûts authentiques et de qualité. Que vous soyez un fan de notre Big Mac légendaire ou que vous préfériez opter pour nos options plus légères et équilibrées, nous avons quelque chose pour satisfaire toutes les papilles. Commandez en ligne en quelques clics et laissez-nous vous livrer l'expérience McDonald's directement à votre porte, pour un plaisir instantané à partager en famille, entre amis ou pour un moment gourmand en solo. Chez McDonald's, le sourire commence dès la première bouchée !",
    delivery_price: "6.50€", // Prix de livraison pour McDonald's
  },
  {
    name: "O'Tacos",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mOGQ5MjU5ZS00YjIzLTRkNWYtOWQ1YS0wNjBlNjE2NDI4Y2QuanBlZw==",
    note: "4.4",
    drive_time: "15 - 25mn",
    description:
      "Chez O'Tacos, plongez dans un monde de gourmandise où les recettes audacieuses et les portions généreuses vous promettent une expérience culinaire unique. Découvrez notre large sélection de tacos, des classiques revisités aux créations originales, tous garnis de viandes tendres, de fromages fondants, de sauces savoureuses et d'ingrédients frais. Que vous préfériez un O'Tacos au poulet grillé, au bœuf, à l'agneau ou même végétarien, notre menu diversifié saura combler vos envies les plus gourmandes. Commandez facilement en ligne et laissez-nous vous livrer ces délices à domicile ou au bureau pour une explosion de saveurs où que vous soyez. Chez O'Tacos, chaque bouchée est une aventure gastronomique, une fusion délectable de saveurs qui éveilleront vos papilles. Découvrez dès maintenant notre menu et plongez dans un festin de plaisirs gourmands !",
    delivery_price: "7.25€", // Prix de livraison pour O'Tacos
  },
  {
    name: "Pizza Hut",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWY1Y2IzMi0yZjYxLTQ5OWQtYjZjOC1iZWIzMDM0MmM4M2IuanBlZw==",
    note: "4.1",
    drive_time: "20 - 30mn",
    description:
      "Chez Pizza Hut, nous sommes fiers de vous offrir une expérience gastronomique unique avec nos pizzas gourmandes et nos saveurs authentiques. Découvrez notre vaste sélection de pizzas, des classiques intemporels aux créations originales, préparées avec des ingrédients frais et de qualité. Que vous préfériez une Pizza Pepperoni classique, une Suprême généreusement garnie ou que vous souhaitiez explorer nos options végétariennes ou sans gluten, notre menu diversifié saura satisfaire toutes vos envies. Commandez facilement en ligne et laissez notre équipe préparer et livrer votre pizza préférée directement à votre porte. Chez Pizza Hut, chaque pizza est une véritable œuvre d'art culinaire, une combinaison parfaite de pâte moelleuse, de fromage fondant et de garnitures savoureuses qui vous transporteront vers un festin de saveurs inoubliables. Découvrez dès maintenant notre menu et plongez dans un univers de délices pizzaïolos !",
    delivery_price: "8.20€", // Prix de livraison pour Pizza Hut
  },
  {
    name: "Momiji",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWExZDYxOC0wZTQwLTRiZjItYjRjNS1hZTAyZDQ2Y2Y1Y2UuanBlZw==",
    note: "4.3",
    drive_time: "20 - 30mn",
    description:
      "Découvrez l'expérience culinaire exquise du restaurant Momiji, où l'art japonais de la gastronomie prend vie dans chaque plat. Notre carte diversifiée et innovante vous offre un voyage gustatif à travers les délices japonais, des sushis raffinés aux makis savoureux, en passant par les incontournables California rolls, les yakitoris grillés et les sashimis délicatement préparés. Chez Momiji, nous vous invitons à plonger dans l'authenticité de la cuisine japonaise, disponible à emporter ou en livraison pour un festin gourmand où que vous soyez. Laissez-vous envoûter par la fraîcheur des ingrédients, la précision des saveurs et la subtilité des textures, offrant à votre palais une expérience sensorielle inoubliable. Explorez notre menu pour découvrir la richesse et la finesse de la cuisine japonaise, préparée avec passion pour éveiller vos papilles et ravir vos sens. Découvrez dès aujourd'hui Momiji, où chaque plat est une célébration de la tradition culinaire japonaise.",
    delivery_price: "6.90€", // Prix de livraison pour Momiji
  },
  {
    name: "Food Time",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jNTMxMTVhOC0wZjExLTQ5YmUtYjIyNi0yYTc5YjgzMTA4MmI=",
    note: "4.2",
    drive_time: "25 - 35mn",
    description:
      "Bienvenue chez Food Time, votre destination gourmande pour une variété de saveurs alléchantes ! Découvrez notre vaste sélection de délices, allant des sandwiches savoureux aux burgers juteux, des kebabs grillés à la perfection aux pizzas débordantes de garnitures appétissantes et aux tacos délicieusement préparés. Chez Food Time, nous célébrons la diversité des plaisirs culinaires, offrant à nos clients une expérience gastronomique variée et satisfaisante. Que vous recherchiez un sandwich classique, un burger gourmet, un kebab copieux, une pizza généreuse ou des tacos aux saveurs vibrantes, notre menu propose une panoplie de choix pour combler toutes les envies. Commandez en ligne et offrez-vous une pause gourmande à emporter ou en livraison, pour savourer le meilleur de la cuisine street food où que vous soyez. Chez Food Time, la variété est notre signature, et chaque bouchée est une promenade savoureuse à travers une palette de saveurs alléchantes. Découvrez dès maintenant notre menu diversifié et laissez-vous tenter par un festin à la hauteur de vos attentes gourmandes chez Food Time !",
    delivery_price: "9.15€", // Prix de livraison pour Food Time
  },
  {
    name: "L'escale",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81OTI5MzU4Ni01NDk4LTQ5YTYtOGMzZS1lMzYzNTBkYmMzMTMuanBlZw==",
    note: "4.5",
    drive_time: "20 - 30mn",
    description:
      "Bienvenue à L'Escale, votre escale gastronomique où les saveurs du monde se rencontrent pour vous offrir une expérience culinaire inoubliable. Plongez dans un univers de délices variés, où les cuisines internationales se marient pour éveiller vos papilles. Découvrez notre sélection exquise, allant des plats emblématiques aux saveurs méditerranéennes aux délices exotiques d'Asie, en passant par des créations originales revisitant les classiques de la cuisine internationale. Chez L'Escale, nous sommes fiers de vous offrir une expérience culinaire diversifiée et raffinée. Que vous soyez tenté par les saveurs ensoleillées de la Méditerranée, les arômes épicés de l'Asie ou les plats traditionnels revisités, notre menu saura satisfaire toutes vos envies. Commandez en ligne et laissez-vous transporter par un festin culinaire à emporter ou en livraison, pour savourer une escapade gustative chez vous. Chez L'Escale, chaque plat est une invitation au voyage, une fusion de saveurs qui célèbre la richesse de la cuisine du monde. Découvrez notre carte et laissez-nous vous guider vers une expérience gastronomique mémorable chez L'Escale !",
    delivery_price: "8.75€", // Prix de livraison pour L'escale
  },
  {
    name: "M&A",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTU0NDA4NzMyMjk3Ni13NTUwLTdiLmpwZw==",
    note: "4.3",
    drive_time: "20 - 30mn",
    description:
      "Bienvenue dans notre restaurant dédié aux délices de la mer, où chaque plat est une célébration des saveurs marines les plus exquises. Notre menu met en vedette une sélection raffinée de poissons frais, capturés au meilleur de leur fraîcheur pour vous offrir une expérience gastronomique incomparable. Découvrez la richesse de nos plats préparés avec expertise, des grillades de poissons délicatement assaisonnées aux délicieuses fritures croustillantes en passant par des créations originales inspirées des saveurs internationales. Chez nous, la qualité et la fraîcheur des produits sont notre priorité, garantissant des mets succulents et savoureux à chaque bouchée. Rejoignez-nous pour une expérience culinaire où la délicatesse des saveurs marines se marie à la créativité de notre cuisine pour ravir vos papilles. Que ce soit pour un repas en famille, entre amis ou une escapade gastronomique en solo, notre restaurant vous invite à explorer un monde de plaisirs culinaires issus des profondeurs des océans. Plongez dans une expérience gustative exceptionnelle et laissez-vous envoûter par les trésors de la mer chez nous, où chaque plat est une symphonie de fraîcheur et de saveurs marines.",
    delivery_price: "7.80€", // Prix de livraison pour M&A
  },
  {
    name: "Burger's Friends",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81Mzk3YWEzOC0yYjRhLTRmOTItYmU4Ny1kZDE5YWEzNGU4MTQuanBlZw==",
    note: "3.8",
    drive_time: "30 - 40mn",
    description:
      "Bienvenue chez Burger's Friends, l'endroit où les burgers deviennent des moments de partage et de convivialité. Notre restaurant est une ode à la gourmandise et à l'art du burger, où chaque création est une expérience gastronomique à part entière. Découvrez notre sélection unique de burgers préparés avec passion, mettant en vedette des pains moelleux, des ingrédients frais et des saveurs audacieuses. Que vous préfériez un classique burger au fromage fondant ou une création signature, nos options variées sauront éveiller vos papilles. Nous mettons un point d'honneur à sélectionner des ingrédients de qualité pour vous offrir des burgers aussi savoureux que réconfortants. Rejoignez-nous pour une expérience culinaire où chaque bouchée est une explosion de saveurs, et où la passion pour les burgers se ressent dans chaque détail. Que ce soit pour un déjeuner rapide ou pour une soirée entre amis, Burger's Friends vous invite à savourer des moments de bonheur entre chaque pain. Venez partager un repas délicieux et chaleureux chez nous, où chaque burger raconte une histoire de saveurs inoubliable.",
    delivery_price: "5.90€",
  },
];
module.exports = info;
