import React from 'react'
import { TagThemeAlea } from "../../../Utils/Utils";
import { TagItemStyle } from "./TagItem.styled";

export default function TagItem({tag, style, without}) {
    const tagValue = tag.name; 
    const tagColor= TagThemeAlea(tagValue);
    return (
      <TagItemStyle color={tagColor.theme} style={style}>
        {without ? (
          tagValue
        ) : (
          <a
            href={`/private/questions/tags/${tag._id}`}
            style={{ color: tagColor.color }}
          >
            {tagValue}
          </a>
        )}
      </TagItemStyle>
    );
}
