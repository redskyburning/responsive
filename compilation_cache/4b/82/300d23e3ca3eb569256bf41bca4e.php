<?php

/* base.html */
class __TwigTemplate_4b82300d23e3ca3eb569256bf41bca4e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'test' => array($this, 'block_test'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "testing ";
        $this->displayBlock('test', $context, $blocks);
    }

    public function block_test($context, array $blocks = array())
    {
        echo " ";
    }

    public function getTemplateName()
    {
        return "base.html";
    }

    public function getDebugInfo()
    {
        return array (  18 => 1,);
    }
}
