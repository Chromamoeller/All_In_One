from ..data_structure import DanceFigure, Step, ShapingNote, FigureVariation

close_basic = DanceFigure(
    id="close-basic",
    name="Grundschritt",
    dance="Cha Cha Cha",

    man_steps=[
        Step(1, "2", "1", "LF vorwärts, Fuß nach außen gedreht", "ganzer Fuß", "Vorwärtsgang gestoppt", "-"),
        Step(2, "3", "1", "RF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", "-"),
        Step(3, "4", "1/2", "LF seitwärts und leicht zurück", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "RF halb zum LF schließen", "ganzer Fuß", "Cha Cha Cha Chassé", "bis zu 1/4 nach links"),
        Step(5, "1", "1", "LF seitwärts und leicht zurück", "ganzer Fuß", "LRL Drehung nach links", ""),
        Step(6, "2", "1", "RF rückwärts", "ganzer Fuß", "Rückwärtsgang", "-"),
        Step(7, "3", "1", "LF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(8, "4", "1/2", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "", ""),
        Step(9, "&", "1/2", "LF halb zum RF schließen", "ganzer Fuß", "Cha Cha Cha Chassé", "bis zu 1/4 nach links"),
        Step(10, "1", "1", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "RLR Drehung nach links", ""),
    ],

    lady_steps=[
        Step(1, "2", "1", "RF rückwärts", "ganzer Fuß", "Rückwärtsgang", "-"),
        Step(2, "3", "1", "LF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", "-"),
        Step(3, "4", "1/2", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "LF halb zum RF schließen", "ganzer Fuß", "Cha Cha Cha Chassé", "bis zu 1/4 nach links"),
        Step(5, "1", "1", "RF seitwärts und leicht vorwärts", "ganzer Fuß", "RLR Drehung nach links", ""),
        Step(6, "2", "1", "LF vorwärts, Fuß nach außen gedreht", "ganzer Fuß", "Vorwärtsgang gestoppt", "-"),
        Step(7, "3", "1", "RF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(8, "4", "1/2", "LF seitwärts und leicht zurück", "ganzer Fuß", "", ""),
        Step(9, "&", "1/2", "RF halb zum LF schließen", "ganzer Fuß", "Cha Cha Cha Chassé", "bis zu 1/4 nach links"),
        Step(10, "1", "1", "LF seitwärts und leicht zurück", "ganzer Fuß", "LRL Drehung nach links", ""),
    ],

    shaping=[
        ShapingNote(1, "Beginn und Ende in geschlossener Tanzhaltung (Close Hold)."),
    ],

    precedes=[
        "Time Step",
        "Close Basic",
        "Spot Turn nach links",
        "Unterarmdrehung nach rechts",
        "Shoulder to Shoulder",
        "Natural Top (mit FINISH A)",
        "Alemana (mit FINISH A)",
        "Alemana aus offener Position mit linker-zu-rechter Handhaltung",
        "Cross Basic",
    ],

    follows=[
        "Time Step",
        "Fan",
        "Cross Basic",
        "Nach Schritt 5: Natural Top",
        "Nach Schritt 5: Unterarmdrehung nach rechts",
        "Kann in Open CPP beendet werden",
        "Check aus Open CPP",
        "Unterarmdrehung nach links",
        "Cuban Break in Open CPP",
        "Split Cuban Break in Open CPP",
        "Split Cuban Break aus Open CPP und Open PP",
    ],

    variations=[],
)