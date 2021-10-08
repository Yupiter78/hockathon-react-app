import React, { useState } from "react";
import members from "../db/api.members";

const MemberCard = (memberId) => {
    const [member, setMember] = useState();
    setMember(members.find((item) => item._id === memberId));

    return (
        <div>
            <h1> {member.firstName}</h1>
        </div>
    );
};

export default MemberCard;
