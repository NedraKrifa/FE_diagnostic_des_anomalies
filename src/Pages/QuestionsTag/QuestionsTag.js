import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTag } from "../../Redux/actions/Tags/tagsActions";
import QuestionsTagBody from '../../Components/Briks/Body/QuestionsTagBody/QuestionsTagBody';
import AppLayout from '../../Layouts/AppLayout';

export default function QuestionsTag() {
    let { tagname } = useParams();
    const dispatch = useDispatch();
    useEffect(() => dispatch(getTag(tagname)), [tagname,dispatch]);
    const tag = useSelector((state) => state.tags.tag);
    return (
        <AppLayout isPTags>
          <QuestionsTagBody tagName={tag.name}/>
        </AppLayout>
    )
}
