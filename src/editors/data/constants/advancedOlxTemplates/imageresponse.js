/* eslint-disable */
// ---
// metadata:
//     display_name: Image Mapped Input
//     markdown: !!null
// data:   |
const imageResponse = `<problem>
        <p>
            In an image mapped input problem, also known as a "pointing on a picture" problem, students click inside a defined region in an image. You define this region by including coordinates in the body of the problem. You can define one rectangular region,
            multiple rectangular regions, or one non-rectangular region. For more information, see
            <a href="https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/create_image_mapped_input.html" target="_blank">Image Mapped Input Problem</a>
            in
            <i>Building and Running an Open edX Course</i>.
        </p>
        <p>When you add the problem, be sure to select
            <strong>Settings</strong>
            to specify a
            <strong>Display Name</strong>
            and other values that apply.</p>
        <p>You can use the following example problem as a model.</p>
        <imageresponse>
            <p>What country is home to the Great Pyramid of Giza as well as the cities of Cairo and Memphis? Click the country on the map below.</p>
            <imageinput src="https://studio.edx.org/c4x/edX/DemoX/asset/Africa.png" width="600" height="638" rectangle="(338,98)-(412,168)" alt="Map of Africa"/>
            <solution>
                <div class="detailed-solution">
                    <p>Explanation</p>
                    <p>Egypt is home to not only the Pyramids, Cairo, and Memphis, but also the Sphinx and the ancient Royal Library of Alexandria.</p>
                </div>
            </solution>
        </imageresponse>
    </problem>`;

export default imageResponse;
