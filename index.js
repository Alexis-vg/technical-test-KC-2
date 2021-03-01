const API_URL =
  "https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z";
fetch(`${API_URL}`)
  .then((response) => response.json())
  .then((responseJson) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: responseJson.map((item) => item.Date),
        datasets: [
          {
            label: "# of Votes",
            data: responseJson.map((item) => item.Confirmed),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

/* const data = [44848, 84, 77887, 578777];
const month1 = document.querySelector(
  ".gains-per-month__month1.gains-per-months-all"
);
const month2 = document.querySelector(
  ".gains-per-month__month2.gains-per-months-all"
);
const price1 = document.createElement("p");
price1.className = "price1";
price1.textContent = `$${data[0]}`;

month1.append(price1);

const price2 = document.createElement("p");
price2.className = "price2";
price2.textContent = `$${data[1]}`;

month2.append(price2); */
