from ..data_structure import DanceFigure, Step, ShapingNote, FigureVariation

fan = DanceFigure(
    id="fan",
    name="Fan",
    dance="Cha Cha Cha",

    man_steps=[
        Step(1, "2", "1", "LF vorwärts, Fuß nach außen gedreht", "ganzer Fuß", "Vorwärtsgang gestoppt", "-"),
        Step(2, "3", "1", "RF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(3, "4", "1/2", "LF seitwärts und leicht zurück", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "RF halb zum LF schließen", "ganzer Fuß", "Cha Cha Cha Chassé", "1/8 nach links"),
        Step(5, "1", "1", "LF seitwärts und leicht zurück", "ganzer Fuß", "LRL Drehung nach links", ""),
        Step(6, "2", "1", "RF rückwärts, Partner leicht links versetzt", "ganzer Fuß", "Rückwärtsgang", "-"),
        Step(7, "3", "1", "LF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(8, "4", "1/2", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "", ""),
        Step(9, "&", "1/2", "LF halb zum RF schließen", "ganzer Fuß", "Cha Cha Cha Chassé", "1/4 nach links"),
        Step(10, "1", "1", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "RLR Drehung nach links", ""),
    ],

    lady_steps=[
        Step(1, "2", "1", "RF rückwärts", "ganzer Fuß", "Rückwärtsgang", "-"),
        Step(2, "3", "1", "LF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(3, "4", "1/2", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "LF halb zum RF schließen", "ganzer Fuß", "Cha Cha Cha Chassé (RLR)", ""),
        Step(5, "1", "1", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "", ""),
        Step(6, "2", "1", "LF vorwärts in Open Position links", "ganzer Fuß", "Vorwärtsgang", ""),
        Step(7, "3", "1", "RF rückwärts und leicht seitwärts", "ganzer Fuß", "Vorwärtsgang mit Drehung", "3/8 nach links"),
        Step(8, "4", "1/2", "LF rückwärts", "Ballen", "Cha Cha Cha Lock", "1/4 nach links"),
        Step(9, "&", "1/2", "RF vor LF gekreuzt", "ganzer Fuß", "LRL rückwärts", ""),
        Step(10, "1", "1", "LF rückwärts", "ganzer Fuß", "", ""),
    ],

    shaping=[
        ShapingNote(1, "Beginn in geschlossener Haltung, dann linken Arm senken."),
        ShapingNote(2, "Verbindung mit rechter Hand lösen."),
        ShapingNote(3, "Ende in Fan Position."),
    ],

    precedes=[
        "Time Step",
        "Close Basic",
        "Spot Turn nach links",
        "Unterarmdrehung nach rechts",
        "Natural Top (FINISH A)",
        "Alemana",
        "Alemana aus offener Position mit linker-zu-rechter Handhaltung",
        "Cross Basic",
    ],

    follows=[
        "Hockey Stick",
        "Alemana",
    ],

    variations=[],
)