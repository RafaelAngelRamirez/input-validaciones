# Input Validaciones

Mensajes de validaciones rápidos para reactive forms. Por el momento solo en español.

> Requiere los estilos de bootstrap 4 o 5 para funcionar y para los iconos utiliza fontawesome. Especificamente, utiliza la estructura y las clases de validación de bootstrap para señalar el error.

### Instalación

> `npm i @codice-progressio/input-validaciones`

### Uso

Agrega el modal en los modulos que requieras validaciones.

```javascript
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputValidacionesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Llama el componente debajo del input que tenga asinado el `formControlName` (para mantener un orden y estilos css)

```html
<!-- 
=====================================
nombre
=====================================
-->
<div class="col-12">
  <div class="form-group">
    <input
      [ngClass]="{
        'is-invalid': vs.invalid(f('nombre')),
        'is-valid': vs.valid(f('nombre'))
        }"
      type="text"
      class="form-control font-20 font-weight-bolder"
      formControlName="nombre"
    />
    <small id="helpId" class="form-text text-muted">Nombre proveedor</small>
    <codice-validacion [campo]="f('nombre')"></codice-validacion>
  </div>
</div>
<!-- 
=====================================
END nombre
=====================================
-->
```

> La funcion `f('campo')` es un helper para obtener el campo desde el formulario. Su
> implementación es sumamente sencilla.
>
> ```typescript
> f(c:string):FormControl{
>    return this.formulario.get(c)
> }
> ```

# Herramientas

Estos son algúnos snipets que ayudan en la creación de los formularios con una estructura compatible con la validación y boostrap. [Visual Studio Code]

> Crea un input (Este se puede cambiar por un textarea)

```json
"Insertar input": {
"prefix": "input-validacion",
"body": [
"<!-- ",
      "=====================================",
      " $1",
      "=====================================",
      "-->",

      "<div class='col-${6:6}'>",
      "  <div class=\"form-group\">",
      "  <input",
      "    [ngClass]=\"{",
      "      'is-invalid': vs.invalid(f('${1:cannombreDelCampotidad}')),",
      "      'is-valid': vs.valid(f('${1:nombreDelCampo}'))",
      "    }\"",
      "    type=\"${2:text}\"",
      "    class=\"form-control\"",
      "    formControlName=\"${1:nombreDelCampo}\"",
      "  />",
      "  <small id=\"helpId\" class=\"form-text text-muted\">${5:Descripcion del input}</small>",
      "  <codice-validacion",
      "    [campo]=\"f('${1:nombreDelCampo}')\"",
      "    ${4:[directo]=\"${3:true}\"}",
      "  ></codice-validacion>",
      "</div>",
      "</div>",

      "<!-- ",
      "=====================================",
      " END $1",
      "=====================================",
      "-->"
    ],
    "description": "Input con validacion."

},
```

> Crea un input de tipo checkbox

```json
"Insertar input checkbox": {
"prefix": "input-validacion-checkbox",
"body": [
"<!-- ",
      "=====================================",
      " $1",
      "=====================================",
      "-->",

      "<div class='col-${6:6}'>",
      "  <div class=\"form-check\">",
      "  <label class=\"form-check-label\">",
      "   <input",

      "     type=\"${2:checkbox}\"",
      "     class=\"form-check-input\"",
      "     formControlName=\"${1:nombreDelCampo}\"",
      "   />",
      "${5:Descripcion del input}",
      "  </label>",

      "</div>",
      "</div>",

      "<!-- ",
      "=====================================",
      " END $1",
      "=====================================",
      "-->"
    ],
    "description": "Input con validacion."

},
```

> Genera un input para trabajar con FormArray

```json
"Insertar input array": {
"prefix": "input-validacion-array",
"body": [
"<!-- ",
      "=====================================",
      " $2",
      "=====================================",
      "-->",

      "<div class='col-${7:6}'>",
      "  <div class=\"form-group\">",
      "  <input",
      "    [ngClass]=\"{",
      "      'is-invalid': vs.invalid(${8:dummy}.get('${2:nombreDelCampo}')),",
      "      'is-valid': vs.valid(${8:dummy}.get('${2:nombreDelCampo}'))",
      "    }\"",
      "    type=\"${3:text}\"",
      "    class=\"form-control\"",
      "    formControlName=\"${2:nombreDelCampo}\"",
      "  />",
      "  <small id=\"helpId\" class=\"form-text text-muted\">${6:Descripcion del input}</small>",
      "  <codice-validacion",
      "    [campo]=\"${8:dummy}.get('${2:nombreDelCampo}')\"",
      "    ${5:[directo]=\"${4:true}\"}",
      "  ></codice-validacion>",
      "</div>",
      "</div>",

      "<!-- ",
      "=====================================",
      " END $2",
      "=====================================",
      "-->"
    ],
    "description": "Input con validacion."

},
```

> Genera un input para trabajar con FormArray simples que no sean objetos, esto es, arreglos de tipo string, numericos, etc.

```json
"Insertar input array sub simple": {
"prefix": "input-validacion-array-sub-simple",
"body": [
"<!-- ",
      "=====================================",
      " $2",
      "=====================================",
      "-->",

      "<div class='col-${7:6}'>",
      "  <div class=\"form-group\">",
      "  <input",
      "    [ngClass]=\"{",
      "      'is-invalid': vs.invalid(${8:dummy}),",
      "      'is-valid': vs.valid(${8:dummy})",
      "    }\"",
      "    type=\"${3:text}\"",
      "    class=\"form-control\"",
      "    [formControl]=\"${8:dummy}\"",
      "  />",
      "  <small id=\"helpId\" class=\"form-text text-muted\">${6:Descripcion del input}</small>",
      "  <codice-validacion",
      "    [campo]=\"${8:dummy}\"",
      "    ${5:[directo]=\"${4:true}\"}",
      "  ></codice-validacion>",
      "</div>",
      "</div>",

      "<!-- ",
      "=====================================",
      " END $2",
      "=====================================",
      "-->"
    ],
    "description": "Input con validacion para array con un solo campo"

},
```

> Genera la estructura necesaria para desplegar un arreglo de objetos.

```json
"Insertar_estructura_de_array": {
"prefix": "form-array",
"body": [
"<!-- ",
      "=====================================",
      " Array $1 ",
      "=====================================",
      "-->",

      "<ng-container formArrayName=\"${1:array}\">",
      "<ng-container *ngFor=\"let dummy of fa('${1:array}').controls; let i = index\">",
      "<ng-container [formGroupName]=\"i\">",
      "$2",

      "</ng-container>",
      "</ng-container>",
      "</ng-container>",

      "<!-- ",
      "=====================================",
      " END Array $1 ",
      "=====================================",
      "-->"
    ],
    "description": "Form array plantilla"

},
```

> Dentro de un formArray, generar una subestructura de array. Este es cuando ya se pusieron complicadas las cosas con los arreglos.

```json
"Insertar\_ sub_estructura_de_array": {
"prefix": "form-array-sub",
"body": [
"<!-- ",
      "=====================================",
      " Array $1 ",
      "=====================================",
      "-->",

      "<ng-container formArrayName=\"${1:array}\">",
      "<ng-container *ngFor=\"let ${2:dummy2} of dfa(${3:dummy}, '${1}').controls; let ${4:i} = index\">",
      "<ng-container [formGroupName]=\"${4:i}\">",
      "$1000",
      "</ng-container>",
      "</ng-container>",
      "</ng-container>",

      "<!-- ",
      "=====================================",
      " END Array $1 ",
      "=====================================",
      "-->"
    ],
    "description": "Form array plantilla"

}

```
