import ChildrenInfo from "../relation/ChildrenInfo";
import FriendInfo from "../relation/FriendInfo";

export default function PersonRelation(props){
    const friends = props.friends;
    const children = props.children

    return (
        <>
            <ChildrenInfo list={children}/>
            <FriendInfo list={friends}/>
        </>
    );
}