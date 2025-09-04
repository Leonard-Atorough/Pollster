import type { PollCard as PollCardType } from "@shared/types";
import { PollCard } from "./PollCard";
import { screen } from "@testing-library/react";
import { RenderWithRoutes } from "@/test/RenderWithRoutes";

const testPoll: PollCardType = {
  id: "1",
  title: "Test Poll",
  description: "A test poll",
  votes: 134,
};

describe("PollCard", () => {
  it("passes the props correctly when the element is rendered", () => {
    RenderWithRoutes(<PollCard poll={testPoll} />);
    screen.debug();
    expect(screen.getByText(testPoll.title)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/poll/${testPoll.id}`
    );
    // expect(screen.getByText(testPoll.description)).toBeInTheDocument();
    expect(screen.getByText(testPoll.votes)).toBeInTheDocument();
  });
});
