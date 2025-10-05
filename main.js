document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.payroll-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const idnumber = form.idnumber.value.trim();
        const lastname = form.lastname.value.trim();
        const firstname = form.firstname.value.trim();
        const middlename = form.middlename.value.trim();
        const position = form.position.value.trim();
        const rate = parseFloat(form.rate.value);
        const workdays = parseInt(form.workdays.value);

        // Compute payroll
        const grossPay = rate * workdays;
        const sss = grossPay * 0.05;
        const pagibig = grossPay * 0.03;
        const philhealth = grossPay * 0.02;
        const tax = grossPay * 0.05;
        const totalDeduction = sss + pagibig + philhealth + tax;
        const netPay = grossPay - totalDeduction;

        // Prepare data to pass
        const payrollData = {
            idnumber,
            lastname,
            firstname,
            middlename,
            position,
            rate,
            workdays,
            grossPay,
            sss,
            pagibig,
            philhealth,
            tax,
            totalDeduction,
            netPay
        };

        // Store in localStorage
        localStorage.setItem('payrollData', JSON.stringify(payrollData));

        // Redirect to display page
        window.location.href = 'page2.html';
    });
});