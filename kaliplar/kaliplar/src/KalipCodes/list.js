function list() {
    const students = ["Fatih", "Sultan", "Mehmet"];

    return(
        <div>
            {students.map((student, index) => (
                <student key={index} name={student}/>
            ))}
        </div>
    );
}