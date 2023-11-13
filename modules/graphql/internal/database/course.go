package database

import (
	"database/sql"
	"github.com/google/uuid"
)

type Course struct {
	db          *sql.DB
	ID          string
	Name        string
	Description string
	CategoryID  string
}

func NewCourse(db *sql.DB) *Course {
	return &Course{db: db}
}

func (course *Course) Create(name, description, categoryID string) (*Course, error) {
	id := uuid.New().String()
	_, err := course.db.Exec(
		"INSERT INTO courses (id, name, description, category_id) VALUES ($1, $2, $3, $4)",
		id, name, description, categoryID,
	)

	if err != nil {
		return nil, err
	}

	return &Course{
		ID:          id,
		Name:        name,
		Description: description,
		CategoryID:  categoryID,
	}, nil
}

func (course *Course) FindById(courseID string) (Course, error) {
	var id, name, description, categoryID string

	err := course.db.QueryRow(
		"SELECT id, name, description, category_id FROM courses WHERE id = $1",
		courseID,
	).Scan(&id, &name, &description, &categoryID)

	if err != nil {
		return Course{}, err
	}

	return Course{
		ID:          id,
		Name:        name,
		Description: description,
		CategoryID:  categoryID,
	}, nil
}

func (course *Course) FindAll(categoryID string) ([]Course, error) {
	var rows *sql.Rows
	var err error

	if categoryID == "" {
		rows, err = course.db.Query("SELECT id, name, description FROM courses")
	} else {
		rows, err = course.db.Query("SELECT id, name, description FROM courses WHERE category_id = $1", categoryID)
	}

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var courses []Course

	for rows.Next() {
		var id, name, description string

		if err := rows.Scan(&id, &name, &description); err != nil {
			return nil, err
		}

		courses = append(courses, Course{ID: id, Name: name, Description: description})
	}

	return courses, nil
}
