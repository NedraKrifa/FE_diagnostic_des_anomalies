import React from 'react'
import { Tag } from 'antd';
import { TagThemeAlea } from "../../../Utils/Utils";
import { TagItemStyle } from "./TagItem.styled";

export default function TagItem({tag, style, without}) {
    const tagColor= TagThemeAlea();
    console.log('ho',tagColor)
    return (
      <TagItemStyle color={tagColor.theme} style={style}>
        {without ? (
          tag
        ) : (
          <a
            href={`/private/tags/${tag._id}`}
            style={{ color: tagColor.color }}
          >
            {tag.name}
          </a>
        )}
      </TagItemStyle>
    );
}
