var Bestco = {
    init: function () {
        this.datepicker();
        this.baggingForm();

        $('body').on('click', 'a.disabled', function (event) {
            event.preventDefault();
        });
    },

    datepicker: function () {
        $('.js-datepicker').datepicker({
            todayBtn: "linked",
            clearBtn: true,
            autoclose: true,
            todayHighlight: true
        });
        $(".js-datepicker").datepicker("update", new Date());
    },

    baggingForm: function () {
        var error = false;

        //Check Master Cook Lot number if not empty
        $('#masterCookLot').blur(function () {
            if ($('#cookLot').val() != "") {
                if ($('#masterCookLot').val() !== $('#cookLot').val()) {
                    $('.js-master-cook-lot').addClass('has-error');
                    $('.js-master-cook-lot').find('.help-block').html('The Master Cook Lot and the Cook lot scanned do not match');
                } else {
                    $('.js-master-cook-lot').find('.help-block').html('Scan the MASTER cook lot you want to use');
                }
            }
        });
        $('#cookLot').blur(function () {
            if ($('#masterCookLot').val() === $('#cookLot').val()) {
                $('.js-errors-result').removeClass('alert alert-error');
                if ( ! Bestco.error) {
                    $('.js-finishedLotForm-submit').prop('disabled', false);
                    $('.js-add-cook-lot').removeClass('disabled');
                }
            } else {
                Bestco.error = true;

                $('.js-errors-result').addClass('alert alert-error');
                $('.js-finishedLotForm-submit').prop('disabled', true);
                $('.js-add-cook-lot').addClass('disabled');
                $('.js-fix-error').removeClass('show-on-error');
                if($('#cookLot').val() === ""){
                    $('.js-errors-result').html('Cook lot cannot be left empty');
                } else {
                    $('.js-errors-result').html('The Master Cook Lot and the Cook lot scanned do not match');
                    $('.js-row-repeats').find('.js-cook-lot').addClass('has-error');
                    $('.js-cook-lot').find('.help-block').html('This field has to match the Master Cook Lot #');
                }
            }
        });

        $('#verifierId').blur(function () {
            if ($('#verifierId').val() == '') {
                alert('Please scan your Supervisor ID');
                $('.js-finishedLotForm-submit').prop('disabled', true);
                $('.js-add-cook-lot').addClass('disabled');
            } else {
                $('.js-finishedLotForm-submit').prop('disabled', false);
                $('.js-add-cook-lot').removeClass('disabled');

                Bestco.error = false;
            }
        });

        // Add another cook lot
        var count = 0;
        $('.js-add-cook-lot').on('click', function (e) {
            e.preventDefault();
            var cookLot = $('#cookLot').val();
            var verifierId = $('#verifierId').val();
            var ranNum = Math.random().toString(36).slice(-8).toUpperCase(); // Generate random number 

            if ($('#masterCookLot').val() !== cookLot) {
                $('.js-add-cook-lot').addClass('disabled');
                $('.js-finishedLotForm-submit').prop('disabled', true);
                $('.js-cook-lot').addClass('has-error');
            } else {
                if (cookLot != '') {
                    $('#myTable > tbody:last-child').append('<tr><td>' + cookLot + '</td><td>' + verifierId + '</td><td>'+ ranNum +'</td></tr>');
                    if (count === 0) {
                        $('#myTable tbody tr.placeholder').remove();
                    }
                    // Display confirmation number 
                    $("#myModal").find('.modal-title').html('Confirmation #');
                    $("#myModal").find('.modal-body').html(ranNum);
                    $("#myModal").modal();
                    $('#myModal').on('hidden.bs.modal', function () {
                        $("#myModal").find('.modal-title').html('');
                        $("#myModal").find('.modal-body').html('');
                    });
                    count++;
                }             
            }

            $('#cookLot').val('');
            $('#verifierId').val('');
            $('.js-fix-error').addClass('show-on-error');
            $('#correctError').attr('checked', false);
            $('.js-errors-result').html('');
        });

        $('.js-finishedLotForm-submit').on('click', function () {
            // Trigger the form submit
            // This is needed because the submit button is not placed within the form
            $('#finishedLotForm').submit();
        });
        $('#finishedLotForm').validator().on('submit', function (e) {
            // Prevent the form from submitting if an error was found
            if ($('#finishedLotForm').find('.has-error').length) {
                e.preventDefault();
            }
            if (e.isDefaultPrevented()) {
                // handle the invalid form...                
                return false;
            } else {
                // everything looks good!
                return true;
            }
        });
    },

    // -------------------------------
    // Auto generates an Alpha numeric string
    rangen: function  () {
        var ranString = Math.random().toString(36).slice(-8);
        return ranString;
    },

    dashChart: function () {
        $(function () {

            'use strict';

            /* ChartJS
             * -------
             * Here we will create a few charts using ChartJS
             */

            //-----------------------
            //- MONTHLY SALES CHART -
            //-----------------------

            // Get context with jQuery - using jQuery's .get() method.
            var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var salesChart = new Chart(salesChartCanvas);

            var salesChartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                      label: "Electronics",
                      fillColor: "rgb(210, 214, 222)",
                      strokeColor: "rgb(210, 214, 222)",
                      pointColor: "rgb(210, 214, 222)",
                      pointStrokeColor: "#c1c7d1",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgb(220,220,220)",
                      data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                      label: "Digital Goods",
                      fillColor: "rgba(60,141,188,0.9)",
                      strokeColor: "rgba(60,141,188,0.8)",
                      pointColor: "#3b8bba",
                      pointStrokeColor: "rgba(60,141,188,1)",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgba(60,141,188,1)",
                      data: [28, 48, 40, 19, 86, 27, 90]
                  }
                ]
            };

            var salesChartOptions = {
                //Boolean - If we should show the scale at all
                showScale: true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - Whether the line is curved between points
                bezierCurve: true,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,
                //Boolean - Whether to show a dot for each point
                pointDot: false,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a color
                datasetFill: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
                //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: true,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true
            };

            //Create the line chart
            salesChart.Line(salesChartData, salesChartOptions);
        });
    },
}