import React from 'react'
import Card from './Card'

export default function PizzaTypes() {
  return (
    <div>
        <div class="container pizz-type">
           <div class="row">
            <h2 class="text-center pizzas-type">Pizza Types</h2>
           </div>
           <div class="card__container">
            <Card imgSrc="Images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" title="Goat Meat Pizza" description="This is some Pizza Description oooo!" />
            <Card imgSrc="Images/carissa-gan-_0JpjeqtSyg-unsplash.jpg" title="Beef Pizza" description="This is some Pizza Description oooo!" />
            <Card imgSrc="Images/thomas-tucker-MNtag_eXMKw-unsplash.jpg" title="Pepperoni Pizza" description="This is some Pizza Description oooo!" />
            <Card imgSrc="Images/james-butterly-BjSakjrXOY4-unsplash.jpg" title="Vegetable Pizza" description="This is some Pizza Description oooo!" />
           </div>
         </div>
    </div>
  )
}
