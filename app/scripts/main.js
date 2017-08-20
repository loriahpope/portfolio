var HelpDemo = angular.module('HelpDemo', []);
    HelpDemo.controller('HelpDemoController', ['$scope', function ($scope) {
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

var IconDemo = angular.module('IconDemo', []);
    IconDemo.controller('IconDemoController', ['$scope', function ($scope) {

    $scope.iconItems= [
        {
            "title": "Double Gear",
            "imgSrc": "gear_double.png",
            "alt": "Double Gear Icon",
            "description": "Double Gear Icon"
        },
        {
            "title": "Lightbulb",
            "imgSrc": "lightbulb.png",
            "alt": "Lightbulb Icon",
            "description": "Lightbulb Icon"
        },
        {
            "title": "Laptop",
            "imgSrc": "laptop.png",
            "alt": "Laptop Icon",
            "description": "Laptop Icon"
        },
        {
            "title": "Magnifying Glass",
            "imgSrc": "magnifying_glass.png",
            "alt": "Magnifying Glass Icon",
            "description": "Magnifying Glass Icon"
        },
        {
            "title": "Post-It Note",
            "imgSrc": "post_it.png",
            "alt": "Post-It Note Icon",
            "description": "Post-It Note Icon"
        },
        {
            "title": "Self-Portrait",
            "imgSrc": "loriah-avatar.png",
            "alt": "Self-Portrait Icon",
            "description": "Self-Portrait Icon"
        },
        {
            "title": "Solid Heart",
            "imgSrc": "solid_heart.png",
            "alt": "Solid Heart Icon",
            "description": "Solid-Heart Icon"
        }
    ];

}]);
    IconDemo.directive('iconDemoModal', [function() {
    return {
        restrict: 'E',
        scope: {
            model: '='
        },
        link: function(scope, elem, attrs) {
            console.log('elem', elem);
        },
        templateUrl: 'icon-demo-modal.html'
    }
}]);

var ComponentsDemo = angular.module('ComponentsDemo', []);
    ComponentsDemo.controller('ComponentsDemoController', ['$scope', function ($scope) {

    }]);
    ComponentsDemo.directive('lpAlert', [function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                type: '@'
            },
            templateUrl: 'lpAlert.html'
        }
    }]);