angular.module('HelpDemo', [])
.controller('HelpDemoController', ['$scope', function ($scope) {
    $scope.demoTitle = 'ABC Employee Help';
    $scope.demoSearchPlaceholder = 'What do you need help with?';
    $scope.categories = [
        {
            "id": 0,
            "name": "Category 1",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 1,
            "name": "Category 2",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 2,
            "name": "Category 3",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 3,
            "name": "Category 4",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 4,
            "name": "Category 5",
            "selected": true,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 5,
            "name": "Category 6",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 6,
            "name": "Category 7",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        },{
            "id": 7,
            "name": "Category 8",
            "selected": false,
            "questions": [
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                },
                {
                    "title": "Question Title",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
                }
            ]
        }
    ];
    $scope.selectedCategory = $scope.categories[0];
    $scope.selectCategory = function($event, category) {
        $scope.selectedCategory = category;
    };
    $scope.selectMobile = function(category) {
      $scope.selectedCategory = category;
    };
    $scope.showSteps = false;
    $scope.viewSteps = function () {
      $scope.showSteps = !$scope.showSteps;
      console.log($scope.showSteps);
    };
    $scope.selfHelpSteps = [
        {
            "title": "Step 1",
            "completed": false
        },
        {
            "title": "Step 2",
            "completed": false
        },
        {
            "title": "Step 3",
            "completed": false
        },
        {
            "title": "Step 4",
            "completed": false
        },
        {
            "title": "Step 5",
            "completed": false
        },
        {
            "title": "Step 6",
            "completed": false
        }
    ];
    $scope.completedSteps = function() {
        var count = 0;
        angular.forEach($scope.selfHelpSteps, function(item) {
            count += item.completed ? 1 : 0;
        });
        return count;
    };
    $scope.completeStep = function(step) {
        step.completed = !step.completed;
    };

}]);