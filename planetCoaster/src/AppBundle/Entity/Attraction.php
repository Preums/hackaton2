<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Attraction
 *
 * @ORM\Table(name="attraction")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AttractionRepository")
 */
class Attraction
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=100, nullable=true)
     */
    private $name;

    /**
     * @var int
     *
     * @ORM\Column(name="minage", type="integer", nullable=true)
     */
    private $minage;

    /**
     * @var int
     *
     * @ORM\Column(name="waiting", type="integer", nullable=true)
     */
    private $waiting;

    /**
     * @var string
     *
     * @ORM\Column(name="picture", type="string", length=255, nullable=true)
     */
    private $picture;

    /**
     * @var int
     *
     * @ORM\Column(name="bestlike", type="integer", nullable=true)
     */
    private $bestlike;

    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=255, nullable=true)
     */
    private $type;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Attraction
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set minage
     *
     * @param integer $minage
     *
     * @return Attraction
     */
    public function setMinage($minage)
    {
        $this->minage = $minage;

        return $this;
    }

    /**
     * Get minage
     *
     * @return int
     */
    public function getMinage()
    {
        return $this->minage;
    }

    /**
     * Set waiting
     *
     * @param integer $waiting
     *
     * @return Attraction
     */
    public function setWaiting($waiting)
    {
        $this->waiting = $waiting;

        return $this;
    }

    /**
     * Get waiting
     *
     * @return int
     */
    public function getWaiting()
    {
        return $this->waiting;
    }

    /**
     * Set picture
     *
     * @param string $picture
     *
     * @return Attraction
     */
    public function setPicture($picture)
    {
        $this->picture = $picture;

        return $this;
    }

    /**
     * Get picture
     *
     * @return string
     */
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * Set bestlike
     *
     * @param integer $bestlike
     *
     * @return Attraction
     */
    public function setBestlike($bestlike)
    {
        $this->bestlike = $bestlike;

        return $this;
    }

    /**
     * Get bestlike
     *
     * @return int
     */
    public function getBestlike()
    {
        return $this->bestlike;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return Attraction
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }
}

