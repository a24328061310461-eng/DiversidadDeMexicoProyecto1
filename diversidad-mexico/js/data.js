const DATA = {
    leyendas: [
        // ===== NORTE =====
        {
            id: 'pascualita',
            titulo: 'La Pascualita',
            estado: 'Chihuahua',
            x: 0.18, y: 0.28,
            color: '#d4af37',
            desc: 'En Chihuahua, una leyenda cuenta que La Pascualita es el maniquí de una joven llamada Pascuala Esparza, cuya madre quedó tan devastada por su muerte que decidió exhibir su cuerpo en el escaparate de una tienda. Desde entonces, muchos aseguran que el maniquí parece demasiado real y que cambia de posición durante la noche.',
            img: 'https://noro.mx/wp-content/uploads/2026/03/leyenda-pascualita-chihuahua-819x1024.jpg'
        },
        {
            id: 'llorona_norte',
            titulo: 'El Niño del Tambor',
            estado: 'Coahuila',
            x: 0.30, y: 0.32,
            color: '#ff6ba8',
            desc: 'Cuenta la leyenda que un niño que tocaba el tambor fue separado de su familia durante una época de conflictos. Algunas personas aseguran escuchar su tambor en las noches, especialmente cerca de los antiguos caminos y pueblos del norte.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojHYSy4IySeaUZdVoUSWHsquigxhmJeymHth_FD6Nkd2Fl9CvRX3mREfV&s=10'
        },
        {
            id: 'callejon',
            titulo: 'El Callejón del Beso',
            estado: 'Guanajuato',
            x: 0.43, y: 0.46,
            color: '#ce1126',
            desc: 'Una de las leyendas más famosas de Guanajuato cuenta la historia de dos jóvenes enamorados cuyas familias se oponían a su relación. Sus balcones estaban tan cerca que podían tocarse. La historia terminó trágicamente y dio origen al famoso Callejón del Beso.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEC3-d_AtJztermRIBotx-s7zSP0vAxGuAcovdrbjn_gS9JMolVTW00iCH&s=10'
        },
        {
            id: 'llorona',
            titulo: 'La Llorona',
            estado: 'Ciudad de México',
            x: 0.52, y: 0.52,
            color: '#f9f5ed',
            desc: 'La Llorona es una de las leyendas más conocidas de México. Se cuenta que una mujer perdió a sus hijos y, llena de dolor, vaga por las noches cerca de ríos y canales buscando sus almas. Su característico lamento se ha convertido en parte de la tradición popular mexicana.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo6d-iEpyI6MQ9tU7ijL6HNDMZ527oYFQu8mcdoeBgjJw6u75Tkgyx8Y&s=10'
        },
        {
            id: 'munecas',
            titulo: 'Isla de las Muñecas',
            estado: 'Xochimilco',
            x: 0.58, y: 0.62,
            color: '#d4af37',
            desc: 'En los canales de Xochimilco, la Isla de las Muñecas es un lugar escalofriante. Don Julián Santana encontró el cuerpo de una niña ahogada en 1950. Desde entonces colgó muñecas de los árboles para espantar su espíritu. Tras 50 años haciéndolo, murió ahogado en el mismo canal. Hoy cientos de muñecas deterioradas cuelgan del lugar.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKnFZG4O3EXPTtazLQji7YEkLYOpegwtAMSMB_iXlmw&s=10'
        },
        {
            id: 'chupacabras',
            titulo: 'El Chupacabras',
            estado: 'Todo México',
            x: 0.48, y: 0.35,
            color: '#ff2d4a',
            desc: 'Criatura legendaria que ataca al ganado y succiona su sangre por pequeños orificios. Los primeros avistamientos documentados fueron en Puerto Rico en 1995, extendiéndose rápidamente por todo México. Se describe como un ser bípedo con espinas dorsales, ojos rojos y colmillos. La ciencia sugiere que podría ser un coyote con sarna o un animal desconocido.',
            img: 'https://c.files.bbci.co.uk/12213/production/_92795247_mediaitem92795246.jpg'
        },
        {
            id: 'charro_negro',
            titulo: 'El Charro Negro',
            estado: 'Jalisco',
            x: 0.42, y: 0.55,
            color: '#000000',
            desc: 'Un jinete vestido completamente de negro aparece en los caminos solitarios al anochecer. Ofrece llevarte a cambio de tu alma, con una sonrisa siniestra. Se dice que es el diablo en persona buscando víctimas. Quien acepta su oferta nunca regresa. Es una de las leyendas más temidas del occidente mexicano.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2G0ShLSOShj4ZAcd2rohV35jXZwsPJNro1k66gTcj6w&s=10'
        },
        {
            id: 'mulata',
            titulo: 'La Mulata de Córdoba',
            estado: 'Veracruz',
            x: 0.68, y: 0.52,
            color: '#a86bff',
            desc: 'Una hermosa mulata llamada Soledad fue acusada de brujería por la Inquisición en Córdoba, Veracruz. En su celda, dibujó un barco en la pared y navegó en él hacia la libertad. Los guardias solo encontraron una pared vacía y una vela encendida. Su historia es símbolo de resistencia y libertad.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1goldrGjN7pjR0Bzv0T45_W0dWR0ZbInukMBJ32v2KMdaJZ54hY0rYWE&s=10'
        },

        // ===== SUR =====
        {
            id: 'nahual',
            titulo: 'El Nahual',
            estado: 'Oaxaca',
            x: 0.58, y: 0.72,
            color: '#4ad4a8',
            desc: 'En la tradición mesoamericana, el nahual es un ser humano con la capacidad de transformarse en animal. Cada persona nace con un nahual protector, pero algunos brujos usan su poder para hacer el mal. Se dice que si lastimas al nahual de alguien, esa persona muere. Los nahuales más comunes son el jaguar, el águila y el coyote.',
            img: 'https://img.chilango.com/2019/08/la-leyenda-del-nahual-redes.jpg'
        },
        {
            id: 'llorona_sur',
            titulo: 'La Tisigua',
            estado: 'Chiapas',
            x: 0.68, y: 0.78,
            color: '#ff6ba8',
            desc: 'En Chiapas, la Tisigua es una mujer fantasmal que aparece en los caminos por las noches. Se dice que fue una madre que perdió a sus hijos y ahora busca reemplazarlos. Su llanto se escucha antes de que alguien muera. Es una variante regional de La Llorona, con matices mayas.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0vB8AX0s0BQMLKrYuyobMAgl-6ZRPSTvaz7B8iqS_A&s=10'
        },
        {
            id: 'xunaan',
            titulo: 'La Xtabay',
            estado: 'Yucatán',
            x: 0.88, y: 0.48,
            color: '#ff8a4a',
            desc: 'En las selvas de Yucatán, la Xtabay es una mujer hermosa que aparece a los hombres extraviados. Los seduce con su belleza, pero al acercarse se transforma en un ser monstruoso con espinas venenosas. Cuenta la leyenda maya que era una mujer vanidosa que fue castigada por los dioses. Es la versión yucateca de la mujer fatal.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pJyWjA-WvE9oUQhEAZZlugB62vAp0kn_Sg9zED9xUNH2zjmf6rWlaFp5&s=10'
        },
        {
            id: 'tumba_faraon',
            titulo: 'La Tumba del Faraón',
            estado: 'Yucatán',
            x: 0.90, y: 0.55,
            color: '#d4af37',
            desc: 'En las ruinas mayas de Yucatán se dice que existe una cámara secreta con el cuerpo momificado de un faraón egipcio. Algunos exploradores afirman haber visto jeroglíficos que conectan Egipto con los mayas. La leyenda surgió en el siglo XX, mezclando arqueología y teorías de contacto extraterrestre.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03VtiYVPN9gQQxSvgPU3ADNl2MiAYkBSAwZu6ATmcTA&s=10'
        },
        {
            id: 'zapata',
            titulo: 'El Fantasma de Zapata',
            estado: 'Morelos',
            x: 0.52, y: 0.62,
            color: '#00b37e',
            desc: 'Se dice que el espíritu de Emiliano Zapata cabalga por los campos de Morelos cada 10 de abril, aniversario de su muerte. Los campesinos afirman escuchar los cascos de su caballo blanco y ver su silueta con sombrero alado. Su fantasma protege a los campesinos que luchan por la tierra.',
            img: 'https://elemblob.blob.core.windows.net/media/taiboii-fantasmazapata555f64694d145_300h.jpg'
        },

        // ===== GOLFO =====
        {
            id: 'bruja_veracruz',
            titulo: 'La Bruja de Veracruz',
            estado: 'Veracruz',
            x: 0.72, y: 0.48,
            color: '#a86bff',
            desc: 'En las calles coloniales de Veracruz, se dice que una bruja aparece al anochecer. Su presencia se anuncia con un olor a azufre y el vuelo de murciélagos. Fue una mujer que pactó con el diablo y ahora busca almas para su maestro. Se aparece especialmente a los viajeros que caminan solos.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcaCGSJvTxcBqz9-7a8hyvlAXcXOkJDj4ZYoiAudDlZCYae87X5rk-jM&s=10'
        },
        {
            id: 'pirata_veracruz',
            titulo: 'El Tesoro del Pirata',
            estado: 'Veracruz',
            x: 0.70, y: 0.45,
            color: '#4a9eff',
            desc: 'Muchos piratas asolaron el Golfo de México en los siglos XVI-XVII. Se dice que el pirata Lorencillo escondió un tesoro invaluable en las costas veracruzanas. Su fantasma aparece en noches de luna llena protegiendo su oro. Quien lo encuentre sin hacer ruido, obtendrá riquezas, pero quien lo despierte, morirá ahogado.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPe7Y2i3lxh3fgpNnbf_SZwUz3vIvhyLQBGUE44kLxA&s=10'
        },

        // ===== NORTE ADICIONAL =====
        {
            id: 'llorona_monterrey',
            titulo: 'La Mujer de Blanco',
            estado: 'Nuevo León',
            x: 0.48, y: 0.22,
            color: '#f9f5ed',
            desc: 'En las carreteras de Nuevo León, muchos conductores reportan haber visto a una mujer vestida de blanco en el acotamiento. Al detenerse, ella desaparece o pide que la lleven a un pueblo cercano. Los que la han llevado, descubren después que murió en un accidente años atrás. Es una leyenda urbana moderna del norte.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmj4o8AMmYBw0GwFKNmD48M_o7n9jJ0F-MjJHMzx-Gw5lICoKNkjn7CM&s=10'
        },
        {
            id: 'pisadas',
            titulo: 'El Diablo en el Camino',
            estado: 'Durango',
            x: 0.35, y: 0.30,
            color: '#ff5a5a',
            desc: 'En el desierto de Durango, muchos viajeros aseguran haber encontrado pisadas con pezuñas y un olor a azufre. Se dice que el diablo camina por esas tierras buscando almas descarriadas. Si lo encuentras, debes hacer la señal de la cruz y no mirarlo a los ojos. Es una de las leyendas más antiguas del norte.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5mi8B20R5ga8f7-uqWevekJ_ENEJ_C8fCL-r-y2TN9LwF-GyGtUIe9s&s=10'
        },
        {
            id: 'isla_catalina',
            titulo: 'El Barco Fantasma',
            estado: 'Baja California',
            x: 0.10, y: 0.25,
            color: '#4affd4',
            desc: 'Frente a las costas de Baja California, pescadores aseguran haber visto un galeón español del siglo XVI navegando sin tripulación. Se cree que es el "San Felipe", que naufragó en 1575. El barco aparece en noches de niebla, con velas desgarradas y luces fantasmas en la cubierta. Perseguirlo trae mala suerte.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfvwVJxlC-WaL3ZS6ZwAH-VyvE3ClYogC0ZzWSCxqBWZufjA5uTIa2U8&s=10'
        },
        {
            id: 'india_maria',
            titulo: 'La India María',
            estado: 'Michoacán',
            x: 0.44, y: 0.60,
            color: '#ffb84a',
            desc: 'En Michoacán, se cuenta de una mujer indígena que murió defendiendo su pueblo durante la conquista. Su espíritu aparece cuando hay peligro, guiando a los habitantes hacia la seguridad. Se le ve con su traje tradicional purépecha, portando un bastón tallado. Es símbolo de resistencia indígena.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRiHKOgKNinAkFwGyZPdwTY4f-7EbfIKCyOiJ4GFhLvFs12xGgIRD9hUc&s=10'
        },
        {
            id: 'sirena',
            titulo: 'La Sirena de Campeche',
            estado: 'Campeche',
            x: 0.80, y: 0.62,
            color: '#4a9eff',
            desc: 'En las aguas del Golfo de México frente a Campeche, los pescadores juran haber visto sirenas. Se dice que una mujer se enamoró de un pescador y decidió convertirse en sirena para estar con él en el mar. Ahora atrae a otros hombres al agua con su canto, pero solo para proteger a su amado. Quien la escuche, debe resistir.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZYYxKEn3ctFkOeqgoy5krepOOQfqLuV1yF54NvmVlBO0TvWtr7l9ZVQ&s=10'
        }
    ]
};