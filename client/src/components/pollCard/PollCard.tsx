import type { PollCard } from "@shared/types";
import { Link } from "react-router-dom";

export function PollCard({poll}: {poll:PollCard}){
    return(
        <article>
            <h2><Link to={`/poll/${poll.id}`}>{poll.title}</Link></h2>
            <p>{poll.description || "No description"}</p>
            <p>{poll.votes}</p>
        </article>
    )
}