import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { data } from "./datasource";
import "./App.css";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DataManager, JsonAdaptor } from "@syncfusion/ej2-data";
import { useRef } from "react";

const datasource = new DataManager({ json: data, adaptor: new JsonAdaptor() });
const item = {
  OrderID: 10248,
  CustomerID: "VINET",
  EmployeeID: 5,
  OrderDate: new Date(8364186e5),
  ShipName: "Vins et alcools Chevalier",
  ShipCity: "Reims",
  ShipAddress: "59 rue de l Abbaye",
  ShipRegion: "CJ",
  ShipPostalCode: "51100",
  ShipCountry: "France",
  Freight: 32.38,
  Verified: !0,
};

export const App = () => {
  const gridRef = useRef<GridComponent>(null);
  return (
    <>
      <ButtonComponent
        onClick={() => {
          const newItem = { ...item }; // clone template
          newItem.OrderID = getRndInteger(10000, 99999);
          newItem.Freight = getRndInteger(10, 99);
          datasource.insert(newItem);
          gridRef.current?.refresh();
        }}
      >
        Button
      </ButtonComponent>
      <GridComponent ref={gridRef} dataSource={datasource}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
      </GridComponent>
    </>
  );
};

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
