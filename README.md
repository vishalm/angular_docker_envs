# AngularEnvDocker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker env
  
In the /assets folder, create a new file called env.js with the following content:

```
(function(window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["apiUrl"] = "https://api.myapp.com";
  window["env"]["debug"] = true;
})(this); 
```
Call the function at application startup by adding it to the index.html file:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->

    <!-- Load environment variables -->
    <script src="assets/env.js"></script>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```
Now open Angular's environemnt.ts file and feed it's values with the ones from the env.js file:
```
export const environment = {
  production: false,
  apiUrl: window["env"]["apiUrl"] || "default",
  debug: window["env"]["debug"] || false
};
```
create a new env.template.js file next to the env.js file in the /assets folder. The content is an exact copy of env.js, just with placeholder variables.
```
(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["apiUrl"] = "${API_URL}";
  window["env"]["debug"] = "${DEBUG}";
})(this);
```
```
docker run --env API_URL="https://demo-api.myapp.com" my-container:latest
```

