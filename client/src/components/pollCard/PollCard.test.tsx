import type { PollCard as PollCardType } from "@shared/types";
import { PollCard } from "./PollCard";
import { render, screen } from "@testing-library/react";

const testpoll: PollCardType = {
  id: "1",
  title: "Test Poll",
  description: "A test poll",
  votes: 134,
};

describe("PollCard", () => {
  it("passes the props correctly when the element is rendered", () => {
    render(<PollCard poll={testpoll} />);

    expect(screen.getByText(testpoll.title)).toBeInTheDocument();
  });
});
