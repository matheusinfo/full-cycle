package graph

import "matheusinfo/full-cycle-graphql/internal/database"

type Resolver struct {
	CategoryDB *database.Category
	CourseDB   *database.Course
}
