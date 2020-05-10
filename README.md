
# TailwindCssMenu

  

Este proyecto esta construido con los siguientes FrameWorks:

  

* Angular 9

* TailwindCss

* Font-Awesome

  
  

### Descripción

  

Menú responsivo en Angular y CSS. Este ejmple fue tomado del sitio de TailWindCss, se tradue el ejemplo de Vue.JS a Angular9

  

## Compilar para GitHub Pages

  

```

ng build --prod --base-href "https://elcascarudo-dev.github.io/NavBar-responsibe-tailwindcss-angular9/" --output-path=docs

```

  

## Descargar y ejecutar

```
git clone https://github.com/elcascarudo-dev/NavBar-responsibe-tailwindcss-angular9.git
```

```
npm install
```

## Algunos comandos

- Instalación TailWind css

[Instalación TailWind css](https://tailwindcss.com/docs/installation/)

- Compilación TailWindcss

```
npx tailwindcss build tailwind.css -o src/assets/output.css
```

- Compilación de mis CSS en Tail Wind Css

En el 'tailwind.css' agragr los nombres de las clases que deseamos crar

```
@tailwind base;
@tailwind components;

.btn-resp-menu{
	@apply mb-1 block px-2 py-1 text-white font-semibold rounded;
}
.btn-resp-menu:fover {
	@apply bg-gray-800
}
@screen sm {
	.btn-resp-menu {
		@apply mb-0 ml-2
	}
}

@tailwind utilities;
```
y compilar

```
npx tailwindcss build tailwind.css -o src/assets/output.css --watch
```