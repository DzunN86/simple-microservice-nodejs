<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyCourseController extends Controller
{
    public function create(Request $request)
    {
        $rules = [
            'course_id' => 'required|integer',
            'user_id' => 'required|integer'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $courseId = $request->input('course_id');
        $course = Course::find($courseId);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'course not found'
            ], 404);
        }

        $userId = $request->input('user_id');
        $user = getUser($userId);

        if ($user['status'] === 'error') {
            return response()->json([
                'status' => $user['status'],
                'message' => $user['message']
            ], $user['http_code']);
        }

        $isExistMyCourse = MyCourse::where('course_id', '=', $courseId)
                                    ->where('user_id', '=', $userId)
                                    ->exists();
        
        if ($isExistMyCourse) {
            return response()->json([
                'status' => 'error',
                'message' => 'user already take this course'
            ],409);
        }

        $myCourse = MyCourse::create($data);

        return response()->json([
            'status' => 'success',
            'data' => $myCourse
        ]);
    }
}
