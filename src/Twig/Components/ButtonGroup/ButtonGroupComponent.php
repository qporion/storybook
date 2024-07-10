<?php

namespace App\Twig\Components\ButtonGroup;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('button-group', template: 'components/ButtonGroup/button_group.html.twig')]
class ButtonGroupComponent
{
    public bool $compact = false;
}