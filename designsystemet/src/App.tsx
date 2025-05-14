import {
  DigiBarChart,
  DigiButton,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import "./App.css";
import {
  BarChartVariation,
  LayoutBlockContainer,
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";

function App() {
  return (
    <>
      <DigiLayoutBlock
        afContainer={LayoutBlockContainer.STATIC}
        afVariation={LayoutBlockVariation.PRIMARY}
      >
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <DigiLayoutColumns
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.THREE}
          >
            <div>
              <DigiButton
                afFullWidth={false}
                afSize="large"
                afVariation="primary"
                onAfOnClick={() => {
                  console.log("Klick");
                }}
              >
                Spara
              </DigiButton>
            </div>
            <div>
              <DigiButton
                afFullWidth={false}
                afSize="large"
                afVariation="secondary"
                onAfOnClick={() => {
                  console.log("Cancel");
                }}
              >
                Avbryt
              </DigiButton>
            </div>
            <div>
              <div style={{ width: "400px", height: "400px" }}>
                <DigiBarChart
                  afVariation={BarChartVariation.Vertical}
                  afChartData={{
                    data: {
                      xValues: [10, 50],
                      xValueNames: ["Antal 1", "Antal 2"],
                      series: [
                        {
                          yValues: [20, 40],
                          title: "Antal studenter",
                        },
                      ],
                    },
                    x: "Studenter",
                    y: "Antal",
                    title: "My awesome chart",
                  }}
                ></DigiBarChart>
              </div>
            </div>
          </DigiLayoutColumns>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
}

export default App;
