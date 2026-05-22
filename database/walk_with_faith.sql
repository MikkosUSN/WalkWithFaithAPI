USE walk_with_faith;

CREATE TABLE VerseOfTheDay
(
    VerseOfTheDayID INT PRIMARY KEY AUTO_INCREMENT,
    VerseID INT,
    DisplayDate DATE,

    FOREIGN KEY (VerseID)
    REFERENCES BibleVerse(VerseID)
);