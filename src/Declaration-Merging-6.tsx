import * as React from "react";
import { renderToString } from 'react-dom/server'

declare module "react" {
  interface Component {
    helloWorld(): string;
  }
}

React.Component.prototype.helloWorld = function() {
  return'Hello World'
}

class MyComponent extends React.Component {
  render() {
    return (
    <div>{this.helloWorld()}</div>
    )
  }
}

interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, {
  name: 'Explorer'
});

const starships: Record<string, Starship> = {
  Explorer1: {
    name: 'Explorer1',
    enableHyperjump: true
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperjump: true
  }
}

type AvailableDrinked = 'cof' | 'tea' | 'oj' | 'lem'

type DTDL = 'cof' | 'tea'
let JanesDrink: Exclude<AvailableDrinked, 'cof'|'tea'|'lem'|'oj'>

interface StarshipProperties {
  color?: 'blue' | 'red' | 'green'
}
function paintStarship (id: number, color: NonNullable<StarshipProperties['color']>) {}

paintStarship(1, 'blue')