from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Step:
    step_no: int
    timing: str
    beat_value: str
    foot_position: str
    foot_work: str
    action_used: str
    body_turn: Optional[str] = None


@dataclass
class ShapingNote:
    step_no: int
    text: str


@dataclass
class FigureVariation:
    title: str
    description: str
    man_note: Optional[str] = None
    lady_note: Optional[str] = None
    follows: list[str] = field(default_factory=list)


@dataclass
class DanceFigure:
    id: str
    name: str
    dance: str

    man_steps: list[Step]
    lady_steps: list[Step]

    shaping: list[ShapingNote] = field(default_factory=list)

    precedes: list[str] = field(default_factory=list)
    follows: list[str] = field(default_factory=list)

    variations: list[FigureVariation] = field(default_factory=list)