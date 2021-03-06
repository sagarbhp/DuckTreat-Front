import { render, screen } from "@testing-library/react";

import Home from "../components/home";
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
import PopularFoodTable from "../components/analytics/pupularFoodTable";
import DataByCountry from "../components/analytics/dataByCountry";
import PaginatedData from "../components/analytics/paginatedData";

describe("Home Component", () => {
  it("Renders properly", () => {
    render(<Home />);
    expect(
      screen.getByText("Welcome To", { exact: false })
    ).toBeInTheDocument();
  });
});

describe("Header Component", () => {
  it("Renders properly", () => {
    render(<Header />);
    expect(screen.getByText("Duck", { exact: false })).toBeInTheDocument();
  });
});

describe("Form Component", () => {
  it("Renders properly", () => {
    render(<Form />);
    expect(
      screen.getByText("Please fill in the form to help me", { exact: false })
    ).toBeInTheDocument();
  });
});

describe("Footer Component", () => {
  it("Renders properly", () => {
    render(<Footer />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Thank You For Your Participation"
    );
  });
});

describe("PopularFoodTable Component", () => {
  it("Renders properly", () => {
    render(<PopularFoodTable />);
    expect(screen.getByRole("heading")).toHaveTextContent("Popular Foods");
  });
});

describe("DataByCountry Component", () => {
  it("Renders properly", () => {
    render(<DataByCountry />);
    expect(screen.getByRole("heading")).toHaveTextContent("Country Data");
  });
});

describe("PaginatedData Compont", () => {
  it("Renders properly", () => {
    render(<PaginatedData />);
    expect(screen.getByRole("heading")).toHaveTextContent("Input Data");
  });
});
