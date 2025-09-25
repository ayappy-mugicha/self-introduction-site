import React from "react";

function Skills() {

    const mySkills = [
        {id:0, name: 'python', level:"6/10"},
        {id:1, name: 'javascript',level:"5/10"},
        {id:2, name: 'git',level:"6/10"}
    ];
    return (
        <>
            <h1>私のスキル</h1>
            <p>
                現在の学習中の技術や得意な分野をまとめてみました。
            </p>
            <ul>
                {mySkills.map(skill =>
                    <li key={skill.id} >
                        <strong>{skill.name}</strong>: {skill.level}
                    </li>
                )}
            </ul>
            <p>
                これらのスキルをさらに向上させ、新しい技術も積極的に学んでいきたいと考えてます。
            </p>
        </>
    )
}
export default Skills;