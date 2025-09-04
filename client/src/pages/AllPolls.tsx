import { PollCard } from "@/components/pollCard/PollCard";
import type { PollCard as pollCardType } from "@shared/types";
import { useEffect, useState } from "react";

export function AllPolls() {
  const [polls, setPolls] = useState<pollCardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPoll() {
      try {
        const res = await fetch("/api/polls");
        const data = await res.json();
        setPolls(data as pollCardType[]);
      } catch (err) {
        console.error("Failed to fetch poll: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPoll();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (polls.length <= 0) return <p>Could not find or load polls...</p>;

  return (
    <section>
      {polls.map((pollItem) => (
        <PollCard key={pollItem.id} poll={pollItem} />
      ))}
    </section>
  );
}
