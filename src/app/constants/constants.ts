export const URLS_ENDPOINTS = {
    HEROES: '/heroes',
    HEROES_ID: '/heroes/:id'
}

export const PARAMS_MODAL = {
    NEW_HEROE: {
        title: 'Heroe',
        subtitle: 'Agrega los datos del nuevo Heroe',
        isConfirmation: false,
        isEdit: false
    },
    CONFIRMAR_ELIMINAR_HEROE: {
        title: 'Aviso',
        subtitle: 'Desea eliminar el Heroe de la lista?',
        isConfirmation: true,
        isEdit: false
    },
    EDITAR_HEROE: {
        title: 'Heroe',
        subtitle: 'Editando',
        isConfirmation: true,
        isEdit: true
    },
    ERROR_SERVICE: {
        title: 'Error!',
        subtitle: 'Ha ocurrido un error en el servidor, intente más tarde',
        isConfirmation: false,
        isEdit: false
    },
    ERROR_DATOS: {
        title: 'Error!',
        subtitle: 'Ha ocurrido un error, verifique que los datos sean correctos...',
        isConfirmation: false,
        isEdit: false
    }
}