from ..data_structure import DanceFigure, Step, ShapingNote, FigureVariation

hockey_stick = DanceFigure(
    id="hockey-stick",
    name="Hockey Stick",
    dance="Cha Cha Cha",

    man_steps=[
        Step(1, "2", "1", "LF vorwärts, Fuß nach außen gedreht", "ganzer Fuß", "Vorwärtsgang gestoppt", "-"),
        Step(2, "3", "1", "RF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", "-"),
        Step(3, "4", "1/2", "LF seitwärts, kurzer Schritt", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "RF halb zum LF schließen", "ganzer Fuß", "Kompaktes Chassé", "-"),
        Step(5, "1", "1", "LF seitwärts, kurzer Schritt", "ganzer Fuß", "", ""),
        Step(6, "2", "1", "RF rückwärts", "ganzer Fuß", "Rückwärtsgang", ""),
        Step(7, "3", "1", "LF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", "1/8 nach rechts"),
        Step(8, "4", "1/2", "RF vorwärts", "ganzer Fuß", "Cha Cha Cha Lock", ""),
        Step(9, "&", "1/2", "LF hinter RF gekreuzt", "Ballen", "RLR vorwärts", ""),
        Step(10, "1", "1", "RF vorwärts", "ganzer Fuß", "", ""),
    ],

    lady_steps=[
        Step(1, "2", "1", "RF zum LF schließen", "ganzer Fuß", "Schließen mit Gewichtswechsel", "-"),
        Step(2, "3", "1", "LF vorwärts", "ganzer Fuß", "Vorwärtsgang", "-"),
        Step(3, "4", "1/2", "RF vorwärts", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "LF hinter RF gekreuzt", "Ballen", "Cha Cha Cha Lock (RLR vorwärts)", ""),
        Step(5, "1", "1", "RF vorwärts", "ganzer Fuß", "", ""),
        Step(6, "2", "1", "LF vorwärts", "ganzer Fuß", "Vorwärtsgang", "1/8 nach links"),
        Step(7, "3", "1", "RF rückwärts und leicht seitwärts", "ganzer Fuß", "Vorwärtsgang mit Drehung", "3/8 nach links"),
        Step(8, "4", "1/2", "LF rückwärts", "Ballen", "Cha Cha Cha Lock", ""),
        Step(9, "&", "1/2", "RF vor LF gekreuzt", "ganzer Fuß", "LRL rückwärts", "1/8 nach links"),
        Step(10, "1", "1", "LF rückwärts", "ganzer Fuß", "", ""),
    ],

    shaping=[
        ShapingNote(1, "Beginn in Fan Position."),
        ShapingNote(5, "Linker Arm hebt sich und zeigt die Drehung nach links an."),
        ShapingNote(10, "Ende in offener Position mit linker-zu-rechter Handhaltung."),
    ],

    precedes=[
        "Fan",
        "Open Hip Twist",
        "Close Hip Twist",
    ],

    follows=[
        "Open Basic",
        "Alemana aus offener Position mit linker-zu-rechter Handhaltung",
        "Open Hip Twist",
        "Open Hip Twist Spiral",
        "1–5 Close Basic zu Natural Top",
        "1–5 Close Basic zu Unterarmdrehung nach rechts",
        "Wenn rechte-zu-rechter Handhaltung entsteht: Alemana mit rechter-zu-rechter Handhaltung",
        "Turkish Towel",
    ],

    variations=[
        FigureVariation(
            title="Hockey Stick turned to Open CPP",
            description=(
                "Während die Dame Schritt 7 tanzt, erhöht der Herr ihre Drehung nach links "
                "über Spannung im linken Arm und führt sie in Open CPP."
            ),
            man_note="1/8 Drehung nach rechts auf Schritt 6. Cha Cha Cha Lock (RLR) über Schritte 8–10.",
            lady_note="3/4 Drehung nach links auf Schritt 7 mit Spiral Cross Action. Cha Cha Cha Lock (LRL) über Schritte 8–10.",
            follows=[
                "Check aus Open CPP",
                "Unterarmdrehung nach links",
                "Cuban Break in Open CPP",
                "Split Cuban Break in Open CPP",
                "Split Cuban Break aus Open CPP und Open PP",
            ],
        )
    ],
)