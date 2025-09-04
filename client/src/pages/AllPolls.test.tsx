import { RenderWithRoutes } from "@/test/RenderWithRoutes";
import type { PollCard } from "@shared/types";
import { AllPolls } from "./AllPolls";
import { screen } from "@testing-library/react";

import { GlobalMocks } from "../test/GlobalMocks";
var mocks = GlobalMocks();

const testPolls: PollCard[] = [
  {
    id: "poll-001",
    title: "Best JavaScript Framework",
    description: "Vote for your favorite JS framework in 2025",
    votes: 342,
  },
  {
    id: "poll-002",
    title: "Dark Mode vs Light Mode",
    description: "Which UI theme do you prefer?",
    votes: 198,
  },
  {
    id: "poll-003",
    title: "Tabs or Spaces",
    // No description provided
    votes: 421,
  },
  {
    id: "poll-004",
    title: "Most Anticipated Tech of the Year",
    description: "AI, AR, Quantum Computing — what's your pick?",
    votes: 87,
  },
];

describe("AllPolls Page", () => {
  beforeEach(() => {
    global.fetch = mocks.mockFetchRouter({ "/api/polls": testPolls });
  });
  it("renders a page with poll card elements when given an array of poll cards", async () => {
    RenderWithRoutes(<AllPolls />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    for (const poll of testPolls) {
      expect(await screen.findByText(poll.title)).toBeInTheDocument();
    }
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
