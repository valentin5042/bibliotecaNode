$w.onReady(function () {
    const dropdown = $w("#dropdown1");
    const datePicker = $w("#datePicker1");
    const startDateText = $w("#startDateText");
    const endDateText = $w("#endDateText");

    // Asegúrate de que todos los elementos estén disponibles
    if (dropdown && datePicker && startDateText && endDateText) {
        console.log("Todos los elementos están presentes.");

        // Escuchar el evento onChange del dropdown
        dropdown.onChange((event) => {
            const selectedValue = dropdown.value; // Obtener el valor seleccionado
            console.log("Valor seleccionado en dropdown:", selectedValue);

            // Verifica los valores posibles
            if (selectedValue === "4" || selectedValue === "8") {
                console.log("Valor seleccionado es válido, mostrando el datePicker");

                // Simular el clic en el datePicker para abrirlo automáticamente
                datePicker.click(); // Simulando el clic

                // Establecer un rango de fechas a partir de la fecha seleccionada (si ya hay una seleccionada)
                const startDate = new Date();
                const endDate = new Date(startDate);
                if (selectedValue === "4") {
                    endDate.setDate(startDate.getDate() + 3); // 4 días, 3 adicionales
                } else if (selectedValue === "8") {
                    endDate.setDate(startDate.getDate() + 7); // 8 días, 7 adicionales
                }

                // Opcionalmente, establecer el rango en el DatePicker si es necesario
                datePicker.setRangeDates(startDate, endDate);
            } else {
                console.log("Valor no reconocido, selecciona 4 o 8 días");
            }
        });

        // Manejar la selección de fecha en el DatePicker
        datePicker.onChange((event) => {
            const selectedDate = datePicker.value; // Obtener la fecha seleccionada
            console.log("Fecha seleccionada:", selectedDate);

            if (selectedDate) {
                const startDate = new Date(selectedDate); // Fecha de inicio
                const endDate = new Date(startDate); // Fecha de fin

                // Establecer la fecha de fin en función del valor del dropdown
                if (dropdown.value === "4") {
                    endDate.setDate(startDate.getDate() + 3); // 4 días, 3 adicionales
                } else if (dropdown.value === "8") {
                    endDate.setDate(startDate.getDate() + 7); // 8 días, 7 adicionales
                }

                // Mostrar las fechas de inicio y fin en los campos de texto
                startDateText.text = `Fecha de inicio: ${startDate.toLocaleDateString()}`;
                endDateText.text = `Fecha de fin: ${endDate.toLocaleDateString()}`;

                // Ocultar el datePicker después de seleccionar las fechas
                datePicker.hide();
            }
        });
    } else {
        console.error("No se encontraron los elementos.");
    }
});
