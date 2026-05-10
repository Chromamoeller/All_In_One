from ..data_structure import DanceFigure, Step, ShapingNote, FigureVariation

spot_turn_right = DanceFigure(
    id="spot-turn-right",
    name="Spot Turn to Right",
    dance="Cha Cha Cha",

    man_steps=[
        Step(
            1,
            "2",
            "1",
            "LF vorwärts und über die Körperlinie, Drehung, endet mit LF rückwärts und leicht seitwärts",
            "ganzer Fuß",
            "Vorwärtsgang mit Drehung",
            "1 komplette Drehung nach rechts",
        ),
        Step(2, "3", "1", "RF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(3, "4", "1/2", "LF seitwärts", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "RF halb zum LF schließen", "ganzer Fuß", "Cha Cha Cha Chassé (LRL Drehung nach rechts)", ""),
        Step(5, "1", "1", "LF seitwärts", "ganzer Fuß", "", ""),
    ],

    lady_steps=[
        Step(
            1,
            "2",
            "1",
            "RF vorwärts und über die Körperlinie, Drehung, endet mit RF rückwärts und leicht seitwärts",
            "ganzer Fuß",
            "Vorwärtsgang mit Drehung",
            "1 komplette Drehung nach links",
        ),
        Step(2, "3", "1", "LF am Platz", "ganzer Fuß", "Gewichtsverlagerung am Platz", ""),
        Step(3, "4", "1/2", "RF seitwärts", "ganzer Fuß", "", ""),
        Step(4, "&", "1/2", "LF halb zum RF schließen", "ganzer Fuß", "Cha Cha Cha Chassé (RLR Drehung nach links)", ""),
        Step(5, "1", "1", "RF seitwärts", "ganzer Fuß", "", ""),
    ],

    shaping=[
        ShapingNote(1, "Beginn und Ende in offener Position ohne Handhaltung."),
    ],

    precedes=[
        "Time Step",
        "Check aus Open PP",
        "Spot Turn nach links",
        "Unterarmdrehung nach rechts",
        "Hand to Hand",
    ],

    follows=[
        "Spot Turn nach links",
        "6–10 Shoulder to Shoulder",
        "6–15 Hand to Hand",
        "Cuban Break in offener Position",
        "Wenn in Open PP beendet: Check aus Open PP",
    ],

    variations=[],
)