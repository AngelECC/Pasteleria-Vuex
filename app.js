Vue.component('vue-select', {
    props: ['list', 'value'],
    template: `
            <select>
                <option v-for="item of list">{{item}}</option>
            </select>
        `,
})

var app = new Vue({ 
    el: '#app',
    info() {
        return {
            nombre: "",
            tel: "",
            email: "",
            pastelSelect: "",
        }
    },
    data: {
            direccion: 'Calz. Manhatan',
            telefono: '5564652345',
            horario: 'Lunes - Sábado / 10am - 9pm',
            pasteles: ['Nada','Chocolate', 'Fresa', 'Vainilla', 'Cajeta', 'Durazno', 'Cafe', 'Platano', 'Naranja'],
            adornos: ['Nada','Fondant', 'Chispas de chocolate', "m&m's", 'Carlos V', 'Fresas en trozitos', 'Duraznos en trositos', 'Conejito turin'],            
            nombre: "",
            tel: "",
            email: "",
            pastelSelect: "",

            "pastelesGeneral":[
                {
                    "id":"Chocolate",
                    "precio":150
                },
                {
                    "id":"Fresa",
                    "precio":200
                },
                {
                    "id":"Vainilla",
                    "precio":150
                },
                {
                    "id":"Cajeta",
                    "precio":150
                },
                {
                    "id":"Durazno",
                    "precio":250
                },
                {
                    "id":"Café",
                    "precio":200
                },
                {
                    "id":"Platano",
                    "precio":300
                },
                {
                    "id":"Naranja",
                    "precio":450
                }
            ],
            "adornosGeneral":[
                {
                    "id":"Fondant",
                    "precio":99
                },
                {
                    "id":"Chispas de chocolate",
                    "precio":139
                },
                {
                    "id":"m&m's ",
                    "precio":150
                },
                {
                    "id":"Carlos V",
                    "precio":189
                },
                {
                    "id":"Fresas en trozitos",
                    "precio":199
                },
                {
                    "id":"Duraznos en trozitos",
                    "precio":199
                },
                {
                    "id":"Conejito turin",
                    "precio":299
                }
            ]
    },
    methods: {
        imprimirPasteles: function(){
            var datos =this._data.pastelesGeneral.length;
            var contenido = '';

            for(var pos = 0; pos < datos; pos++ ){
                contenido = contenido + '<p>Sabor '+this._data.pastelesGeneral[pos].id+'     ........ Precio: '+this._data.pastelesGeneral[pos].precio+'</p>';
            }

            return contenido;
        },
        imprimirAdornos: function(){
            var datos = this._data.adornosGeneral.length;
            var contenido = '';

            for(var pos = 0; pos < datos; pos++){
                contenido = contenido + '<p>Adordno ' + this._data.adornosGeneral[pos].id + '    .......... Precio: $' + this._data.adornosGeneral[pos].precio + '</p>';
            }

            return contenido;
        },
    }
})