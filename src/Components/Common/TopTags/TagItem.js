import React from 'react'
import { TagThemeAlea } from "../../../Utils/Utils";
import { TagItemStyle } from "./TagItem.styled";

export default function TagItem({tag, style}) {
    const tagValue = tag.name; 
    const tagColor= TagThemeAlea(tagValue);
    return (
      <TagItemStyle color={tagColor.theme} style={style}>
          <a
            href={`/private/questions/tags/${tag._id}`}
            style={{ color: tagColor.color }}
          >
            {tag.name}
          </a>
      </TagItemStyle>
    );
}
