(function (window, document) {
    function downloadReport() {
        var textPage = window.open();
        textPage.document.open('text/html');
        var output = '';
        output += '<college_financing_plan>';
        output += '';

        output += '\n<estimated_cost_of_attendance>';
        output +=
            '\n<tuition_and_fees>$' +
            document.getElementById('costs-tuition-and-fees').innerHTML +
            '</tuition_and_fees>';
        output +=
            '\n<housing_and_food_on_campus>$' +
            document.getElementById('costs-housing-and-food-on-campus').innerHTML +
            '</housing_and_food_on_campus>';
        output +=
            '\n<housing_and_food_off_campus>$' +
            document.getElementById('costs-housing-and-food-off-campus').innerHTML +
            '</housing_and_food_off_campus>';
        output +=
            '\n<books_and_supplies>$' +
            document.getElementById('costs-books-and-supplies').innerHTML +
            '</books_and_supplies>';
        output +=
            '\n<transportation>$' + document.getElementById('costs-transportation').innerHTML + '</transportation>';
        output +=
            '\n<other_education_costs>$' +
            document.getElementById('costs-other-education-costs').innerHTML +
            '</other_education_costs>';
        output +=
            '\n<estimated_costs_on_campus>$' +
            document.getElementById('costs-total-estimated-cost-on-campus').innerHTML +
            '</estimated_costs_on_campus>';
        output +=
            '\n<estimated_costs_off_campus>$' +
            document.getElementById('costs-total-estimated-cost-off-campus').innerHTML +
            '</estimated_costs_off_campus>';
        output += '\n</estimated_cost_of_attendance>';

        output += '\n<student_aid_index>';
        output += '\n<based_on_fafsa>' + document.getElementById('family-fafsa-cost').innerHTML + '</based_on_fafsa>';
        output +=
            '\n<based_on_institutional_methodology>$' +
            document.getElementById('family-institution-cost').innerHTML +
            '</based_on_institutional_methodology>';
        output += '\n</student_aid_index>';

        output += '\n<scholarships>';
        output +=
            '\n<scholarships_from_your_school>$' +
            document.getElementById('aid-scholarships-school').innerHTML +
            '</scholarships_from_your_school>';
        output +=
            '\n<scholarships_from_your_state>$' +
            document.getElementById('aid-scholarships-state').innerHTML +
            '</scholarships_from_your_state>';
        output +=
            '\n<other_scholarships>$' +
            document.getElementById('aid-scholarships-other').innerHTML +
            '</other_scholarships>';
        output +=
            '\n<employer_paid_tuition_benefits>$' +
            document.getElementById('employer-paid-tuition-benefits').innerHTML +
            '</employer_paid_tuition_benefits>';
        output +=
            '\n<total_scholarships>$' +
            document.getElementById('aid-total-scholarships').innerHTML +
            '</total_scholarships>';
        output += '\n</scholarships>';

        output += '\n<grants>';
        output +=
            '\n<federal_pell_grants>$' +
            document.getElementById('aid-grants-federal-pell').innerHTML +
            '</federal_pell_grants>';
        output +=
            '\n<institutional_grants>$' +
            document.getElementById('aid-grants-institution').innerHTML +
            '</institutional_grants>';
        output += '\n<state_grants>$' + document.getElementById('aid-grants-state').innerHTML + '</state_grants>';
        output +=
            '\n<other_forms_of_grant_aid>$' +
            document.getElementById('aid-grants-other').innerHTML +
            '</other_forms_of_grant_aid>';
        output += '\n<total_grants>$' + document.getElementById('aid-total-grants').innerHTML + '</total_grants>';
        output += '\n</grants>';

        output +=
            '\n<va-education-benefit>$' +
            document.getElementById('va-education-benefit').innerHTML +
            '</va-education-benefit>';

        output += '\n<net_price>$' + document.getElementById('net-price-total').innerHTML + '</net_price>';

        output += '\n<loan_options>';
        output +=
            '\n<federal_direct_subsidized_loan>$' +
            document.getElementById('loan-options-federal-direct-subsidized').innerHTML +
            '</federal_direct_subsidized_loan>';
        output +=
            '\n<federal_direct_subsidized_loan_interest_rate>' +
            document.getElementById('loan-options-federal-direct-subsidized-rate').innerHTML +
            '</federal_direct_subsidized_loan_interest_rate>';
        output +=
            '\n<federal_direct_subsidized_loan_origination_fee>' +
            document.getElementById('loan-options-federal-direct-subsidized-loan-origination_fee').innerHTML +
            '</federal_direct_subsidized_loan_origination_fee>';

        output +=
            '\n<federal_direct_unsubsidized_loan>$' +
            document.getElementById('loan-options-federal-direct-unsubsidized').innerHTML +
            '</federal_direct_unsubsidized_loan>';
        output +=
            '\n<federal_direct_unsubsidized_loan_interest_rate>' +
            document.getElementById('loan-options-federal-direct-unsubsidized-rate').innerHTML +
            '</federal_direct_unsubsidized_loan_interest_rate>';
        output +=
            '\n<federal_direct_unsubsidized_loan_origination_fee>' +
            document.getElementById('loan-options-federal-direct-unsubsidized-loan-origination_fee').innerHTML +
            '</federal_direct_unsubsidized_loan_origination_fee>';

        output +=
            '\n<total_loan_options>' +
            document.getElementById('loan-options-total').innerHTML +
            '</total_loan_options>';
        output += '\n</loan_options>';

        output += '\n<work_options>';
        output += '\n<work_study>$' + document.getElementById('work-options-work-study').innerHTML + '</work_study>';
        output +=
            '\n<work_study_hours>' +
            document.getElementById('work-options-hours-per-week').innerHTML +
            ' /wk</work_study_hours>';
        output +=
            '\n<other_campus_job>$' +
            document.getElementById('work-options-other-campus-job').innerHTML +
            '</other_campus_job>';
        output +=
            '\n<total_work_options>$' +
            document.getElementById('work-options-total').innerHTML +
            '</total_work_options>';
        output += '\n</work_options>';

        output += '\n</college_financing_plan>';
        textPage.document.write('<textarea style="height:900px;width:700px;">' + output + '</textarea>');
    }
    document.getElementById('download-btn').addEventListener('click', downloadReport);
})(window, document);
