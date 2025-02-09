# PokeDashboard
## _The Simple PokeDex App with NextJs_

PokeDashboard is a lightweight, responsive friendly, NextJS-powered pokedex app. You can browse all pokemons available from pokeapi.co in this app.

## Features

- Browse all pokemons
- Search specific pokemon
- Filter, paginate and sort pokemon list


## Tech

PokeDashboard uses a number of open source projects to work properly:

- [NextJS] - The new way of using react. Offering great optimization, SSR, SSG and synamic routing.
- [PokeAPI] - the most complete, open source pokemon api in the entire universe!
- [tailwind-css] - easy to use, extensive documentation, offering wide range of styling without doing it manually.

And of course PokeDashboard itself is open source with a public repository on GitHub.

## Design Choice

Upon designing, I realize that this should be simple and use as little as possible library, no need to use ui-library. I keep it simple by only using tailwind. I choose the color of _green_ and _slate_ from tailwind for main coloring theme. It is less contrast and can blend smoothly with the pokemon images. It also make the styling consistent across the component.
In this app I need to fetch many images in one page, so I need a framework that provide image optimization on the go, without the need of using third-party library, that's why I use NextJs. It also allows me to use _dynamic routing_, _SSR_, _state management_ and I use _component-based architecture_ to split the code and reuse it in another component.

## Deployment

This app deployed in vercel.com, all production events will be maintaned and observed from versel dashboard. As I did not implement third-party logging service (_because this is jus a simple projects and I don't want to overcomplicated over things that can be done in simple way_) in this projects, the log will be observed through the vercel's log dashboard. 

Why vercel you said? Actually, why you asked this question anyway, that's a bit rude man. Well, vercel offering _FREE_ deployment,  use Global CDN, Serverless Functions, Automatic Optimization and the dashboard provide all the infos you need. God bless vercel mania!

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (Thanks dillinger.io for this markdown template, god bless you!)